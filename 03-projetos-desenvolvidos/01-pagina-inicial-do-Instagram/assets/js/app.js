function(n, t, l, u) {
    var o = zu,
      s = Uu.transition;
    Uu.transition = 0;
    try {
      zu = 1, Oe(n, t, l, u)
    } finally {
      zu = o, Uu.transition = s
    }
  }