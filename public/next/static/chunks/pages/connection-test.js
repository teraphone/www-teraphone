/* eslint-disable */

const WS_URL = 'wss://sfu-demo.teraphone.app';
const ROOM_TOKEN = '';

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [571],
  {
    37955: function (t, e, r) {
      'use strict';
      var n = r(26265),
        o = r(85893),
        i = r(38347),
        c = r(68527),
        s = r(90456);

      function a(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }

      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? a(Object(r), !0).forEach(function (e) {
                (0, n.Z)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : a(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      e.Z = function (t) {
        var e = t.children,
          r = (0, i.Z)(t, ['children']);
        return (0, o.jsxs)(
          c.Ug,
          u(
            u(
              {
                align: 'end',
                spacing: '0.5rem',
              },
              r
            ),
            {},
            {
              children: [
                (0, o.jsx)(s.Ee, {
                  src: '/livekit.svg',
                  alt: 'LiveKit Logo',
                  width: '8.125rem',
                  height: '1.75rem',
                }),
                (0, o.jsx)(c.xv, {
                  textStyle: 'v2.body1-mono',
                  color: 'v2.fg1',
                  textTransform: 'uppercase',
                  lineHeight: '1.15',
                  children: e,
                }),
              ],
            }
          )
        );
      };
    },
    98068: function (t, e, r) {
      'use strict';
      r.d(e, {
        Z: function () {
          return h;
        },
      });
      var n = r(85893),
        o = r(38347),
        i = r(26265),
        c = r(64121),
        s = r(67294),
        a = r(79762),
        u = r(68527),
        l = r(4612);

      function f(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }

      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(r), !0).forEach(function (e) {
                (0, i.Z)(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : f(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }

      function h(t) {
        var e = t.domId,
          r = t.label,
          i = t.inputType,
          f = t.placeholder,
          h = t.value,
          d = t.onChange,
          v = t.children,
          y = t.inputProps,
          m = t.containerProps,
          g = void 0 === m ? {} : m,
          b = s.useState(!1),
          x = (0, c.Z)(b, 2),
          w = x[0],
          k = x[1],
          j = p(
            {
              textStyle: 'v2.body2',
              color: 'v2.fg1',
              fontSize: '0.875rem',
              _placeholder: {
                color: 'v2.fg4',
              },
              focusBorderColor: 'v2.fg1',
              borderColor: 'v2.separator2',
              variant: 'flushed',
            },
            y
          ),
          O = g,
          S = O.__focus,
          R = p(p({}, (0, o.Z)(O, ['__focus'])), w ? S : {});
        return (0, n.jsxs)(a.NI, {
          id: e,
          children: [
            r &&
              (0, n.jsx)(u.xv, {
                textStyle: 'v2.h5-mono',
                color: 'v2.fg1',
                textTransform: 'uppercase',
                pb: '0',
                children: r,
              }),
            (0, n.jsxs)(
              u.Ug,
              p(
                p(
                  {
                    spacing: '0',
                  },
                  R
                ),
                {},
                {
                  children: [
                    (0, n.jsx)(
                      l.II,
                      p(
                        {
                          placeholder: f,
                          type: i,
                          value: h,
                          onChange: d,
                          onFocus: function (t) {
                            return k(!0);
                          },
                          onBlur: function (t) {
                            return k(!1);
                          },
                        },
                        j
                      )
                    ),
                    v,
                  ],
                }
              )
            ),
          ],
        });
      }
    },
    31942: function (t, e, r) {
      'use strict';
      r.r(e),
        r.d(e, {
          default: function () {
            return et;
          },
        });
      var n = r(85893),
        o = r(9008),
        i = r(67294),
        c = r(64121),
        s = r(809),
        a = r.n(s),
        u = r(92447);

      function l(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }

      function f(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }

      function p(t, e, r) {
        return e && f(t.prototype, e), r && f(t, r), t;
      }

      function h(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }

      function d(t, e) {
        return (d =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }

      function v(t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0,
          },
        })),
          e && d(t, e);
      }

      function y(t) {
        return (y =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }

      function m(t, e) {
        return !e || ('object' !== y(e) && 'function' !== typeof e) ? h(t) : e;
      }

      function g(t) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var b,
        x = r(26265),
        w = r(17187),
        k = r.n(w),
        j = r(78219);

      function O(t) {
        var e = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = g(t);
          if (e) {
            var o = g(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return m(this, r);
        };
      }
      !(function (t) {
        (t[(t.Waiting = 0)] = 'Waiting'),
          (t[(t.Started = 1)] = 'Started'),
          (t[(t.Finished = 2)] = 'Finished'),
          (t[(t.Skipped = 3)] = 'Skipped');
      })(b || (b = {}));
      var S = (function (t) {
          v(r, t);
          var e = O(r);

          function r(t, n) {
            var o,
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              c =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {};
            return (
              l(this, r),
              (o = e.call(this)),
              (0, x.Z)(h(o), 'url', void 0),
              (0, x.Z)(h(o), 'token', void 0),
              (0, x.Z)(h(o), 'room', void 0),
              (0, x.Z)(h(o), 'status', b.Waiting),
              (0, x.Z)(h(o), 'messages', []),
              (0, x.Z)(h(o), 'warnings', []),
              (0, x.Z)(h(o), 'errors', []),
              (0, x.Z)(h(o), 'errorsAsWarnings', !1),
              (0, x.Z)(h(o), 'sharedData', void 0),
              (o.url = t),
              (o.token = n),
              (o.sharedData = i),
              c.errorsAsWarnings && (o.errorsAsWarnings = c.errorsAsWarnings),
              o
            );
          }
          return (
            p(r, [
              {
                key: 'start',
                value: function (t) {
                  var e = this;
                  this.status === b.Waiting &&
                    (this.setStatus(b.Started),
                    this.perform()
                      .catch(function (t) {
                        e.errorsAsWarnings
                          ? e.appendWarning(t.message)
                          : e.appendError(t.message);
                      })
                      .finally(
                        (0, u.Z)(
                          a().mark(function r() {
                            return a().wrap(function (r) {
                              for (;;)
                                switch ((r.prev = r.next)) {
                                  case 0:
                                    return (r.next = 2), e.disconnect();
                                  case 2:
                                    return (
                                      (r.next = 4),
                                      new Promise(function (t) {
                                        return setTimeout(t, 500);
                                      })
                                    );
                                  case 4:
                                    e.status !== b.Skipped &&
                                      e.setStatus(b.Finished),
                                      t && t();
                                  case 6:
                                  case 'end':
                                    return r.stop();
                                }
                            }, r);
                          })
                        )
                      ));
                },
              },
              {
                key: 'isSuccess',
                value: function () {
                  return 0 === this.errors.length;
                },
              },
              {
                key: 'connect',
                value: (function () {
                  var t = (0, u.Z)(
                    a().mark(function t() {
                      return a().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (!this.room) {
                                  t.next = 2;
                                  break;
                                }
                                return t.abrupt('return', this.room);
                              case 2:
                                return (
                                  (t.next = 4),
                                  (0, j.connect)(this.url, this.token, {
                                    logLevel: 'debug',
                                  })
                                );
                              case 4:
                                return (
                                  (this.room = t.sent),
                                  t.abrupt('return', this.room)
                                );
                              case 6:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'disconnect',
                value: (function () {
                  var t = (0, u.Z)(
                    a().mark(function t() {
                      return a().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (
                                  !this.room ||
                                  this.room.state !== j.RoomState.Connected
                                ) {
                                  t.next = 4;
                                  break;
                                }
                                return (
                                  this.room.disconnect(),
                                  (t.next = 4),
                                  new Promise(function (t) {
                                    return setTimeout(t, 500);
                                  })
                                );
                              case 4:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'skip',
                value: function () {
                  this.setStatus(b.Skipped);
                },
              },
              {
                key: 'appendMessage',
                value: function (t) {
                  this.messages.push(t), this.emit('updated');
                },
              },
              {
                key: 'appendWarning',
                value: function (t) {
                  this.warnings.push(t), this.emit('updated');
                },
              },
              {
                key: 'appendError',
                value: function (t) {
                  this.errors.push(t), this.emit('updated');
                },
              },
              {
                key: 'setStatus',
                value: function (t) {
                  (this.status = t), this.emit('updated');
                },
              },
              {
                key: 'engine',
                get: function () {
                  var t;
                  return null === (t = this.room) || void 0 === t
                    ? void 0
                    : t.engine;
                },
              },
            ]),
            r
          );
        })(k()),
        R = r(68527),
        P = r(49609),
        T = r(10894),
        E = r(29933),
        C = r(46445),
        Z = r(78268),
        W = function (t) {
          var e = t.checker,
            r = t.desc,
            o = t.color;
          return (0, n.jsxs)(R.gC, {
            align: 'start',
            spacing: '0.5rem',
            children: [
              (0, n.jsx)(R.xv, {
                textStyle: 'v2.caption-mono',
                color: o,
                children: null !== r && void 0 !== r ? r : e.description,
              }),
              e.messages.map(function (t, e) {
                return (0, n.jsx)(
                  R.xv,
                  {
                    textStyle: 'v2.caption-mono',
                    color: 'v2.fg1',
                    children: t,
                  },
                  e
                );
              }),
              e.warnings.map(function (t, e) {
                return (0, n.jsxs)(
                  R.xv,
                  {
                    textStyle: 'v2.caption-mono',
                    color: 'v2.cream',
                    children: [
                      (0, n.jsx)(R.xv, {
                        as: 'span',
                        textTransform: 'uppercase',
                        children: 'Warning:',
                      }),
                      ' ',
                      t,
                    ],
                  },
                  e
                );
              }),
              e.errors.map(function (t, e) {
                return (0, n.jsxs)(
                  R.xv,
                  {
                    textStyle: 'v2.caption-mono',
                    color: 'v2.red',
                    children: [
                      (0, n.jsx)(R.xv, {
                        as: 'span',
                        textTransform: 'uppercase',
                        children: 'Error:',
                      }),
                      ' ',
                      t,
                    ],
                  },
                  e
                );
              }),
            ],
          });
        };

      function D(t) {
        var e = t.checker,
          r = i.useState({}),
          o = (0, c.Z)(r, 2)[1],
          s = (0, i.useCallback)(function () {
            o({});
          }, []);
        return (
          (0, i.useEffect)(
            function () {
              return (
                e.on('updated', s),
                function () {
                  e.off('updated', s);
                }
              );
            },
            [e, s]
          ),
          (0, n.jsxs)(R.Ug, {
            spacing: '1rem',
            align: 'start',
            children: [
              b.Started === e.status &&
                (0, n.jsxs)(i.Fragment, {
                  children: [
                    (0, n.jsx)(P.$, {
                      size: 'xs',
                      color: 'v2.fg2',
                    }),
                    (0, n.jsx)(R.xv, {
                      textStyle: 'v2.caption-mono',
                      color: 'v2.fg2',
                      children: e.description,
                    }),
                  ],
                }),
              b.Skipped === e.status &&
                (0, n.jsxs)(i.Fragment, {
                  children: [
                    (0, n.jsx)(T.JO, {
                      as: E.Z,
                      color: 'v2.separator2',
                      w: '1rem',
                      h: '1rem',
                    }),
                    (0, n.jsx)(W, {
                      checker: e,
                      desc: 'SKIPPED: '.concat(e.description),
                      color: 'v2.separator2',
                    }),
                  ],
                }),
              b.Finished === e.status &&
                e.isSuccess() &&
                (0, n.jsxs)(i.Fragment, {
                  children: [
                    (0, n.jsx)(T.JO, {
                      as: C.Z,
                      color: 'v2.green',
                      w: '1rem',
                      h: '1rem',
                    }),
                    (0, n.jsx)(W, {
                      checker: e,
                      color: 'v2.green',
                    }),
                  ],
                }),
              b.Finished === e.status &&
                !e.isSuccess() &&
                (0, n.jsxs)(i.Fragment, {
                  children: [
                    (0, n.jsx)(T.JO, {
                      as: Z.Z,
                      color: 'v2.red',
                      w: '1rem',
                      h: '1rem',
                    }),
                    (0, n.jsx)(W, {
                      checker: e,
                      color: 'v2.red',
                    }),
                  ],
                }),
            ],
          })
        );
      }

      function _(t) {
        var e = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = g(t);
          if (e) {
            var o = g(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return m(this, r);
        };
      }
      var I = (function (t) {
        v(r, t);
        var e = _(r);

        function r() {
          return l(this, r), e.apply(this, arguments);
        }
        return (
          p(r, [
            {
              key: 'perform',
              value: (function () {
                var t = (0, u.Z)(
                  a().mark(function t() {
                    var e, r, n, o, i;
                    return a().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.connect();
                            case 2:
                              return (
                                (r = t.sent),
                                (t.next = 5),
                                (0, j.createLocalAudioTrack)()
                              );
                            case 5:
                              return (
                                (n = t.sent),
                                r.localParticipant.publishTrack(n),
                                (t.next = 9),
                                new Promise(function (t) {
                                  return setTimeout(t, 3e3);
                                })
                              );
                            case 9:
                              return (
                                (t.next = 11),
                                null === (e = n.sender) || void 0 === e
                                  ? void 0
                                  : e.getStats()
                              );
                            case 11:
                              if ((o = t.sent)) {
                                t.next = 14;
                                break;
                              }
                              throw new Error('Could not get RTCStats');
                            case 14:
                              if (
                                ((i = 0),
                                o.forEach(function (t) {
                                  'outbound-rtp' === t.type &&
                                    'audio' === t.mediaType &&
                                    (i = t.packetsSent);
                                }),
                                0 !== i)
                              ) {
                                t.next = 18;
                                break;
                              }
                              throw new Error(
                                'Could not determine packets are sent'
                              );
                            case 18:
                              this.appendMessage(
                                'published '.concat(i, ' audio packets')
                              );
                            case 19:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: 'description',
              get: function () {
                return 'Can publish audio';
              },
            },
          ]),
          r
        );
      })(S);

      function A(t) {
        var e = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = g(t);
          if (e) {
            var o = g(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return m(this, r);
        };
      }
      var L = (function (t) {
        v(r, t);
        var e = A(r);

        function r() {
          return l(this, r), e.apply(this, arguments);
        }
        return (
          p(r, [
            {
              key: 'perform',
              value: (function () {
                var t = (0, u.Z)(
                  a().mark(function t() {
                    var e, r, n, o, i;
                    return a().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.connect();
                            case 2:
                              return (
                                (r = t.sent),
                                (t.next = 5),
                                (0, j.createLocalVideoTrack)()
                              );
                            case 5:
                              return (
                                (n = t.sent),
                                r.localParticipant.publishTrack(n),
                                (t.next = 9),
                                new Promise(function (t) {
                                  return setTimeout(t, 3e3);
                                })
                              );
                            case 9:
                              return (
                                (t.next = 11),
                                null === (e = n.sender) || void 0 === e
                                  ? void 0
                                  : e.getStats()
                              );
                            case 11:
                              if ((o = t.sent)) {
                                t.next = 14;
                                break;
                              }
                              throw new Error('Could not get RTCStats');
                            case 14:
                              if (
                                ((i = 0),
                                o.forEach(function (t) {
                                  'outbound-rtp' === t.type &&
                                    'video' === t.mediaType &&
                                    (i = t.packetsSent);
                                }),
                                0 !== i)
                              ) {
                                t.next = 18;
                                break;
                              }
                              throw new Error(
                                'Could not determine packets are sent'
                              );
                            case 18:
                              this.appendMessage(
                                'published '.concat(i, ' video packets')
                              );
                            case 19:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: 'description',
              get: function () {
                return 'Can publish video';
              },
            },
          ]),
          r
        );
      })(S);

      function N(t) {
        var e = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = g(t);
          if (e) {
            var o = g(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return m(this, r);
        };
      }
      var z = (function (t) {
        v(r, t);
        var e = N(r);

        function r() {
          return l(this, r), e.apply(this, arguments);
        }
        return (
          p(r, [
            {
              key: 'perform',
              value: (function () {
                var t = (0, u.Z)(
                  a().mark(function t() {
                    var e, r, n, o;
                    return a().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.connect();
                            case 2:
                              return (
                                (e = t.sent),
                                (r = !1),
                                (n = !1),
                                e
                                  .on(j.RoomEvent.Reconnecting, function () {
                                    r = !0;
                                  })
                                  .on(j.RoomEvent.Reconnected, function () {
                                    n = !0;
                                  }),
                                e.engine.client.close(),
                                (o = e.engine.client.onClose) && o(''),
                                (t.next = 11),
                                new Promise(function (t) {
                                  return setTimeout(t, 1500);
                                })
                              );
                            case 11:
                              if (r) {
                                t.next = 15;
                                break;
                              }
                              throw new Error('Did not attempt to reconnect');
                            case 15:
                              if (n && e.state === j.RoomState.Connected) {
                                t.next = 18;
                                break;
                              }
                              throw (
                                (this.appendWarning(
                                  'reconnection is only possible in Redis-based configurations'
                                ),
                                new Error('Not able to reconnect'))
                              );
                            case 18:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: 'description',
              get: function () {
                return 'Resuming connection after interruption';
              },
            },
          ]),
          r
        );
      })(S);

      function U(t) {
        var e = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = g(t);
          if (e) {
            var o = g(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return m(this, r);
        };
      }
      var F = (function (t) {
        v(r, t);
        var e = U(r);

        function r() {
          return l(this, r), e.apply(this, arguments);
        }
        return (
          p(r, [
            {
              key: 'perform',
              value: (function () {
                var t = (0, u.Z)(
                  a().mark(function t() {
                    return a().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                !this.sharedData.socketInfo ||
                                !this.sharedData.socketInfo.hasTURN
                              ) {
                                t.next = 6;
                                break;
                              }
                              return (
                                (t.next = 3),
                                (0, j.connect)(this.url, this.token, {
                                  rtcConfig: {
                                    iceTransportPolicy: 'relay',
                                  },
                                })
                              );
                            case 3:
                              (this.room = t.sent), (t.next = 10);
                              break;
                            case 6:
                              return (
                                this.appendWarning(
                                  'No TURN servers configured.'
                                ),
                                this.skip(),
                                (t.next = 10),
                                new Promise(function (t) {
                                  return setTimeout(t, 0);
                                })
                              );
                            case 10:
                            case 'end':
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
            },
            {
              key: 'description',
              get: function () {
                return 'Can connect via TURN';
              },
            },
          ]),
          r
        );
      })(S);

      function B(t) {
        var e = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = g(t);
          if (e) {
            var o = g(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return m(this, r);
        };
      }
      var K = (function (t) {
          v(r, t);
          var e = B(r);

          function r() {
            return l(this, r), e.apply(this, arguments);
          }
          return (
            p(r, [
              {
                key: 'perform',
                value: (function () {
                  var t = (0, u.Z)(
                    a().mark(function t() {
                      return a().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (t.prev = 0), (t.next = 3), this.connect()
                                );
                              case 3:
                                (this.room = t.sent), (t.next = 10);
                                break;
                              case 6:
                                throw (
                                  ((t.prev = 6),
                                  (t.t0 = t.catch(0)),
                                  this.appendWarning(
                                    'ports need to be open on firewall in order to connect.'
                                  ),
                                  t.t0)
                                );
                              case 10:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[0, 6]]
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'description',
                get: function () {
                  return 'Establishing WebRTC connection';
                },
              },
            ]),
            r
          );
        })(S),
        M = r(9286);

      function J(t, e) {
        var r;
        if ('undefined' === typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (r = (function (t, e) {
              if (!t) return;
              if ('string' === typeof t) return X(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              'Object' === r && t.constructor && (r = t.constructor.name);
              if ('Map' === r || 'Set' === r) return Array.from(t);
              if (
                'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return X(t, e);
            })(t)) ||
            (e && t && 'number' === typeof t.length)
          ) {
            r && (t = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= t.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: t[n++],
                    };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var i,
          c = !0,
          s = !1;
        return {
          s: function () {
            r = t[Symbol.iterator]();
          },
          n: function () {
            var t = r.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (s = !0), (i = t);
          },
          f: function () {
            try {
              c || null == r.return || r.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }

      function X(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }

      function $(t) {
        var e = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = g(t);
          if (e) {
            var o = g(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return m(this, r);
        };
      }
      var H = (function (t) {
          v(r, t);
          var e = $(r);

          function r() {
            return l(this, r), e.apply(this, arguments);
          }
          return (
            p(r, [
              {
                key: 'perform',
                value: (function () {
                  var t = (0, u.Z)(
                    a().mark(function t() {
                      var e, r, n, o, i, c, s, u, l, f, p;
                      return a().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (this.url.startsWith('ws:') ||
                                    this.url.startsWith('http:')) &&
                                    this.appendWarning(
                                      'Server is insecure, clients may block connections to it'
                                    ),
                                  (e = new M.SignalClient()),
                                  (t.next = 4),
                                  e.join(this.url, this.token)
                                );
                              case 4:
                                (r = t.sent),
                                  this.appendMessage(
                                    'Connected to server, version '.concat(
                                      r.serverVersion,
                                      '.'
                                    )
                                  ),
                                  (n = !1),
                                  (o = !1),
                                  (i = !1),
                                  (c = J(r.iceServers));
                                try {
                                  for (c.s(); !(s = c.n()).done; ) {
                                    (u = s.value), (l = J(u.urls));
                                    try {
                                      for (l.s(); !(f = l.n()).done; )
                                        (p = f.value).startsWith('turn:')
                                          ? ((o = !0), (i = !0))
                                          : p.startsWith('turns:') &&
                                            ((o = !0), (i = !0), (n = !0)),
                                          p.startsWith('stun:') && (i = !0);
                                    } catch (a) {
                                      l.e(a);
                                    } finally {
                                      l.f();
                                    }
                                  }
                                } catch (a) {
                                  c.e(a);
                                } finally {
                                  c.f();
                                }
                                i
                                  ? o &&
                                    !n &&
                                    this.appendWarning(
                                      'TURN is configured, but TURN/TLS is unavailable.'
                                    )
                                  : this.appendWarning(
                                      'No STUN servers configured.'
                                    ),
                                  (this.sharedData.socketInfo = {
                                    hasSTUN: i,
                                    hasTURN: o,
                                    hasTLS: n,
                                  }),
                                  e.close();
                              case 14:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'description',
                get: function () {
                  return 'Connecting to signal connection via WebSocket';
                },
              },
            ]),
            r
          );
        })(S),
        V = r(15193),
        G = r(98068),
        q = r(37955),
        Q = r(34588);

      function Y(t, e) {
        var r;
        if ('undefined' === typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (r = (function (t, e) {
              if (!t) return;
              if ('string' === typeof t) return tt(t, e);
              var r = Object.prototype.toString.call(t).slice(8, -1);
              'Object' === r && t.constructor && (r = t.constructor.name);
              if ('Map' === r || 'Set' === r) return Array.from(t);
              if (
                'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return tt(t, e);
            })(t)) ||
            (e && t && 'number' === typeof t.length)
          ) {
            r && (t = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= t.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: t[n++],
                    };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var i,
          c = !0,
          s = !1;
        return {
          s: function () {
            r = t[Symbol.iterator]();
          },
          n: function () {
            var t = r.next();
            return (c = t.done), t;
          },
          e: function (t) {
            (s = !0), (i = t);
          },
          f: function () {
            try {
              c || null == r.return || r.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }

      function tt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }

      function et() {
        var t = (0, i.useState)([]),
          e = t[0],
          r = t[1],
          // LiveKit WebSocket URL (React.useState)
          c = (0, i.useState)(WS_URL),
          s = c[0],
          a = c[1],
          // LiveKit Room Token (React.useState)
          u = (0, i.useState)(ROOM_TOKEN),
          l = u[0],
          f = u[1],
          p = (0, i.useState)(!1),
          h = p[0],
          d = p[1],
          v = (0, i.useState)(!1),
          y = v[0],
          m = v[1],
          g = (0, i.useState)(!1),
          x = g[0],
          w = g[1],
          k = (0, i.useState)(0),
          j = k[0],
          O = k[1],
          S = (0, i.useCallback)(
            function () {
              if (0 !== e.length) {
                var t,
                  r = Y(e);
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    var n = t.value;
                    if (n.status === b.Waiting)
                      return (
                        d(!0),
                        O(j + 1),
                        console.log('starting check', n.description),
                        void n.start(S)
                      );
                    if (n.status === b.Started) return;
                  }
                } catch (o) {
                  r.e(o);
                } finally {
                  r.f();
                }
                d(!1),
                  w(e[0].errors.length > 0 || e[1].errors.length > 0),
                  m(!0);
              }
            },
            [e]
          );
        return (
          (0, i.useEffect)(
            function () {
              S();
            },
            [S]
          ),
          (0, n.jsxs)(R.kC, {
            h: '100vh',
            w: '100vw',
            justify: 'center',
            alignItems: 'center',
            children: [
              (0, n.jsxs)(o.default, {
                children: [
                  (0, n.jsx)('title', {
                    children: 'LiveKit Connection Tester',
                  }),
                  (0, n.jsx)('meta', {
                    name: 'description',
                    content:
                      'LiveKit Connection Tester helps you verify your LiveKit server deployment is set up correctly and clients can connect to it.',
                  }),
                  (0, n.jsx)('meta', {
                    name: 'viewport',
                    content:
                      'width=device-width, initial-scale=1, maximum-scale=1',
                  }),
                  (0, n.jsx)('link', {
                    rel: 'icon',
                    href: '/favicon.ico',
                  }),
                ],
              }),
              (0, n.jsxs)(R.gC, {
                maxW: '60rem',
                w: '100%',
                children: [
                  (0, n.jsxs)(R.kC, {
                    w: '100%',
                    direction: 'column',
                    align: 'center',
                    children: [
                      (0, n.jsx)(q.Z, {
                        mb: '1.5rem',
                        children: (0, n.jsxs)(R.Ug, {
                          spacing: '0.25rem',
                          children: [
                            (0, n.jsx)(T.JO, {
                              as: Q.Z,
                              w: '1rem',
                              h: '1rem',
                              color: y && !x ? 'marketing.lk-white' : 'v2.fg3',
                            }),
                            (0, n.jsx)(R.xv, {
                              children: 'Tester',
                            }),
                          ],
                        }),
                      }),
                      (0, n.jsx)(R.xu, {
                        w: '100%',
                        h: '1px',
                        bg: 'v2.separator1',
                      }),
                    ],
                  }),
                  (0, n.jsxs)(R.Ug, {
                    spacing: '2rem',
                    w: '100%',
                    align: 'start',
                    pt: '2rem',
                    children: [
                      (0, n.jsxs)(R.gC, {
                        w: '20.625rem',
                        spacing: '1.5rem',
                        children: [
                          (0, n.jsx)(G.Z, {
                            domId: 'url',
                            label: 'LiveKit URL',
                            placeholder: 'ws://localhost:7880',
                            inputType: 'text',
                            value: s,
                            onChange: function (t) {
                              return a(t.target.value);
                            },
                          }),
                          (0, n.jsx)(G.Z, {
                            domId: 'roomToken',
                            label: 'Room Token',
                            placeholder: 'Generated room token',
                            inputType: 'text',
                            inputProps: {
                              textOverflow: 'ellipsis',
                              overflow: 'hidden',
                            },
                            value: l,
                            onChange: function (t) {
                              return f(t.target.value);
                            },
                          }),
                          (0, n.jsx)(V.zx, {
                            isLoading: h,
                            disabled: !s || !l,
                            onClick: function () {
                              if (s && l) {
                                var t = {},
                                  e = [
                                    new H(s, l, t),
                                    new K(s, l, t),
                                    new F(s, l, t),
                                    new I(s, l, t),
                                    new L(s, l, t),
                                    new z(s, l, t, {
                                      errorsAsWarnings: !0,
                                    }),
                                  ];
                                r(e), w(!1), m(!1);
                              } else alert('Please enter a url and token');
                            },
                            type: 'submit',
                            textTransform: 'uppercase',
                            width: '100%',
                            mt: '2rem',
                            variant: 'primary',
                            size: 'md',
                            _hover: {
                              backgroundColor: '#4963B0',
                            },
                            children: (0, n.jsxs)(R.xv, {
                              fontFamily: 'system-ui, sans-serif',
                              fontWeight: 800,
                              fontSize: '0.75rem',
                              lineHeight: '1.25rem',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                              children: [j > 0 ? 'Restart' : 'Start', ' Test'],
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsxs)(R.gC, {
                        w: '100%',
                        h: '25rem',
                        overflow: 'auto',
                        bg: 'rgba(255,255,255,0.02)',
                        borderRadius: '0.25rem',
                        p: '1.5rem',
                        align: 'start',
                        spacing: '0.75rem',
                        sx: {
                          '&::-webkit-scrollbar': {
                            width: '8px',
                            height: '8px',
                            background: 'transparent',
                          },
                          '&::-webkit-scrollbar-track': {
                            background: 'transparent',
                          },
                          '&::-webkit-scrollbar-thumb': {
                            border: '1px solid #202122',
                            background: 'transparent',
                            borderRadius: '10rem',
                          },
                          '&::-webkit-scrollbar-corner': {
                            background: 'rgba(0,0,0,0)',
                          },
                        },
                        children: [
                          e.map(function (t, e) {
                            return (0, n.jsx)(
                              D,
                              {
                                checker: t,
                              },
                              e
                            );
                          }),
                          y &&
                            (0, n.jsx)(R.gC, {
                              w: '100%',
                              align: 'start',
                              children: x
                                ? (0, n.jsx)(R.xv, {
                                    color: 'v2.red',
                                    textStyle: 'v2.caption-mono',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    children: 'Fail',
                                  })
                                : (0, n.jsx)(R.xv, {
                                    color: 'v2.green',
                                    textStyle: 'v2.caption-mono',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    children: 'Pass',
                                  }),
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    50087: function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/connection-test',
        function () {
          return r(31942);
        },
      ]);
    },
    92447: function (t, e, r) {
      'use strict';

      function n(t, e, r, n, o, i, c) {
        try {
          var s = t[i](c),
            a = s.value;
        } catch (u) {
          return void r(u);
        }
        s.done ? e(a) : Promise.resolve(a).then(n, o);
      }

      function o(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (o, i) {
            var c = t.apply(e, r);

            function s(t) {
              n(c, o, i, s, a, 'next', t);
            }

            function a(t) {
              n(c, o, i, s, a, 'throw', t);
            }
            s(void 0);
          });
        };
      }
      r.d(e, {
        Z: function () {
          return o;
        },
      });
    },
    64121: function (t, e, r) {
      'use strict';
      r.d(e, {
        Z: function () {
          return o;
        },
      });
      var n = r(40355);

      function o(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            if ('undefined' !== typeof Symbol && Symbol.iterator in Object(t)) {
              var r = [],
                n = !0,
                o = !1,
                i = void 0;
              try {
                for (
                  var c, s = t[Symbol.iterator]();
                  !(n = (c = s.next()).done) &&
                  (r.push(c.value), !e || r.length !== e);
                  n = !0
                );
              } catch (a) {
                (o = !0), (i = a);
              } finally {
                try {
                  n || null == s.return || s.return();
                } finally {
                  if (o) throw i;
                }
              }
              return r;
            }
          })(t, e) ||
          (0, n.Z)(t, e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
    },
    46445: function (t, e, r) {
      'use strict';
      var n = r(67294),
        o = r(45697),
        i = r.n(o);

      function c() {
        return (c =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }

      function s(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      var a = (0, n.forwardRef)(function (t, e) {
        var r = t.color,
          o = void 0 === r ? 'currentColor' : r,
          i = t.size,
          a = void 0 === i ? 24 : i,
          u = s(t, ['color', 'size']);
        return n.createElement(
          'svg',
          c(
            {
              ref: e,
              xmlns: 'http://www.w3.org/2000/svg',
              width: a,
              height: a,
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: o,
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            },
            u
          ),
          n.createElement('polyline', {
            points: '20 6 9 17 4 12',
          })
        );
      });
      (a.propTypes = {
        color: i().string,
        size: i().oneOfType([i().string, i().number]),
      }),
        (a.displayName = 'Check'),
        (e.Z = a);
    },
    29933: function (t, e, r) {
      'use strict';
      var n = r(67294),
        o = r(45697),
        i = r.n(o);

      function c() {
        return (c =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }

      function s(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      var a = (0, n.forwardRef)(function (t, e) {
        var r = t.color,
          o = void 0 === r ? 'currentColor' : r,
          i = t.size,
          a = void 0 === i ? 24 : i,
          u = s(t, ['color', 'size']);
        return n.createElement(
          'svg',
          c(
            {
              ref: e,
              xmlns: 'http://www.w3.org/2000/svg',
              width: a,
              height: a,
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: o,
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            },
            u
          ),
          n.createElement('polygon', {
            points: '13 19 22 12 13 5 13 19',
          }),
          n.createElement('polygon', {
            points: '2 19 11 12 2 5 2 19',
          })
        );
      });
      (a.propTypes = {
        color: i().string,
        size: i().oneOfType([i().string, i().number]),
      }),
        (a.displayName = 'FastForward'),
        (e.Z = a);
    },
    78268: function (t, e, r) {
      'use strict';
      var n = r(67294),
        o = r(45697),
        i = r.n(o);

      function c() {
        return (c =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }

      function s(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      var a = (0, n.forwardRef)(function (t, e) {
        var r = t.color,
          o = void 0 === r ? 'currentColor' : r,
          i = t.size,
          a = void 0 === i ? 24 : i,
          u = s(t, ['color', 'size']);
        return n.createElement(
          'svg',
          c(
            {
              ref: e,
              xmlns: 'http://www.w3.org/2000/svg',
              width: a,
              height: a,
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: o,
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            },
            u
          ),
          n.createElement('line', {
            x1: '18',
            y1: '6',
            x2: '6',
            y2: '18',
          }),
          n.createElement('line', {
            x1: '6',
            y1: '6',
            x2: '18',
            y2: '18',
          })
        );
      });
      (a.propTypes = {
        color: i().string,
        size: i().oneOfType([i().string, i().number]),
      }),
        (a.displayName = 'X'),
        (e.Z = a);
    },
    34588: function (t, e, r) {
      'use strict';
      var n = r(67294),
        o = r(45697),
        i = r.n(o);

      function c() {
        return (c =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
            }
            return t;
          }).apply(this, arguments);
      }

      function s(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      var a = (0, n.forwardRef)(function (t, e) {
        var r = t.color,
          o = void 0 === r ? 'currentColor' : r,
          i = t.size,
          a = void 0 === i ? 24 : i,
          u = s(t, ['color', 'size']);
        return n.createElement(
          'svg',
          c(
            {
              ref: e,
              xmlns: 'http://www.w3.org/2000/svg',
              width: a,
              height: a,
              viewBox: '0 0 24 24',
              fill: 'none',
              stroke: o,
              strokeWidth: '2',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            },
            u
          ),
          n.createElement('polygon', {
            points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2',
          })
        );
      });
      (a.propTypes = {
        color: i().string,
        size: i().oneOfType([i().string, i().number]),
      }),
        (a.displayName = 'Zap'),
        (e.Z = a);
    },
  },
  function (t) {
    t.O(0, [774, 348, 888, 179], function () {
      return (e = 50087), t((t.s = e));
      var e;
    });
    var e = t.O();
    _N_E = e;
  },
]);
