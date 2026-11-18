type TransitionType = 'theme' | 'language' | 'navigation';

export function animateView(type: TransitionType, update: () => void) {
  if (!document.startViewTransition) {
    update();
    return;
  }

  const transition = CSS.supports('selector(:active-view-transition-type(navigation))')
    ? document.startViewTransition({ update, types: [type] })
    : document.startViewTransition(update);

  // The next interaction can skip an animation while still applying its update.
  void transition.ready.catch(() => {});
  return transition;
}
