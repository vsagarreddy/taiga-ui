import {isNativeFocused} from '@taiga-ui/cdk/utils/focus';
import {concat, merge, Observable} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    ignoreElements,
    mapTo,
    repeat,
    shareReplay,
    startWith,
    switchMapTo,
    take,
    withLatestFrom,
} from 'rxjs/operators';

import {tuiIsAlive} from './is-alive';
import {typedFromEvent} from './typed-from-event';

let documentMouseUpIsAlive$: Observable<boolean>;
let documentMouseDownIsAlive$: Observable<boolean>;

export function focusVisibleObservable(element: Element): Observable<boolean> {
    const elementBlur$ = typedFromEvent(element, 'blur');
    const {ownerDocument} = element;

    if (!ownerDocument) {
        throw new Error('element does not have ownerDocument');
    }

    if (!documentMouseDownIsAlive$ || !documentMouseUpIsAlive$) {
        documentMouseUpIsAlive$ = typedFromEvent(ownerDocument, 'mouseup', {
            capture: true,
        }).pipe(tuiIsAlive(), startWith(false), shareReplay(1));
        documentMouseDownIsAlive$ = typedFromEvent(ownerDocument, 'mousedown', {
            capture: true,
        }).pipe(tuiIsAlive(), startWith(false), shareReplay(1));
    }

    return merge(
        // focus events excluding ones that came right after mouse action
        concat(
            typedFromEvent(element, 'focus').pipe(take(1)),
            // filtering out blur events when element remains focused so that we ignore browser tab focus loss
            elementBlur$.pipe(
                filter(() => !isNativeFocused(element)),
                take(1),
                ignoreElements(),
            ),
        ).pipe(
            repeat(),
            withLatestFrom(
                documentMouseDownIsAlive$,
                documentMouseUpIsAlive$,
                (_event, elementActual, documentActual) =>
                    elementActual || documentActual,
            ),
            filter(isUserFocus => !isUserFocus),
        ),
    ).pipe(
        switchMapTo(elementBlur$.pipe(mapTo(false), take(1), startWith(true))),
        distinctUntilChanged(),
    );
}
