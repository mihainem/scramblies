goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32500 = arguments.length;
switch (G__32500) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32505 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32505 = (function (f,blockable,meta32506){
this.f = f;
this.blockable = blockable;
this.meta32506 = meta32506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32507,meta32506__$1){
var self__ = this;
var _32507__$1 = this;
return (new cljs.core.async.t_cljs$core$async32505(self__.f,self__.blockable,meta32506__$1));
}));

(cljs.core.async.t_cljs$core$async32505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32507){
var self__ = this;
var _32507__$1 = this;
return self__.meta32506;
}));

(cljs.core.async.t_cljs$core$async32505.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32505.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32505.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32505.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32506","meta32506",1094864498,null)], null);
}));

(cljs.core.async.t_cljs$core$async32505.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32505");

(cljs.core.async.t_cljs$core$async32505.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32505");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32505.
 */
cljs.core.async.__GT_t_cljs$core$async32505 = (function cljs$core$async$__GT_t_cljs$core$async32505(f__$1,blockable__$1,meta32506){
return (new cljs.core.async.t_cljs$core$async32505(f__$1,blockable__$1,meta32506));
});

}

return (new cljs.core.async.t_cljs$core$async32505(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32514 = arguments.length;
switch (G__32514) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32520 = arguments.length;
switch (G__32520) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32534 = arguments.length;
switch (G__32534) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34542 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34542) : fn1.call(null,val_34542));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34542) : fn1.call(null,val_34542));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32560 = arguments.length;
switch (G__32560) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___34551 = n;
var x_34552 = (0);
while(true){
if((x_34552 < n__4706__auto___34551)){
(a[x_34552] = x_34552);

var G__34553 = (x_34552 + (1));
x_34552 = G__34553;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32561 = (function (flag,meta32562){
this.flag = flag;
this.meta32562 = meta32562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32563,meta32562__$1){
var self__ = this;
var _32563__$1 = this;
return (new cljs.core.async.t_cljs$core$async32561(self__.flag,meta32562__$1));
}));

(cljs.core.async.t_cljs$core$async32561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32563){
var self__ = this;
var _32563__$1 = this;
return self__.meta32562;
}));

(cljs.core.async.t_cljs$core$async32561.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32561.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32561.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32561.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32562","meta32562",-1008813350,null)], null);
}));

(cljs.core.async.t_cljs$core$async32561.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32561");

(cljs.core.async.t_cljs$core$async32561.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32561");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32561.
 */
cljs.core.async.__GT_t_cljs$core$async32561 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32561(flag__$1,meta32562){
return (new cljs.core.async.t_cljs$core$async32561(flag__$1,meta32562));
});

}

return (new cljs.core.async.t_cljs$core$async32561(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32565 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32565 = (function (flag,cb,meta32566){
this.flag = flag;
this.cb = cb;
this.meta32566 = meta32566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32567,meta32566__$1){
var self__ = this;
var _32567__$1 = this;
return (new cljs.core.async.t_cljs$core$async32565(self__.flag,self__.cb,meta32566__$1));
}));

(cljs.core.async.t_cljs$core$async32565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32567){
var self__ = this;
var _32567__$1 = this;
return self__.meta32566;
}));

(cljs.core.async.t_cljs$core$async32565.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32565.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32565.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32566","meta32566",-697831658,null)], null);
}));

(cljs.core.async.t_cljs$core$async32565.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32565");

(cljs.core.async.t_cljs$core$async32565.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async32565");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32565.
 */
cljs.core.async.__GT_t_cljs$core$async32565 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32565(flag__$1,cb__$1,meta32566){
return (new cljs.core.async.t_cljs$core$async32565(flag__$1,cb__$1,meta32566));
});

}

return (new cljs.core.async.t_cljs$core$async32565(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32595_SHARP_){
var G__32661 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32595_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32661) : fret.call(null,G__32661));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32596_SHARP_){
var G__32662 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32596_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32662) : fret.call(null,G__32662));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34562 = (i + (1));
i = G__34562;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___34563 = arguments.length;
var i__4830__auto___34564 = (0);
while(true){
if((i__4830__auto___34564 < len__4829__auto___34563)){
args__4835__auto__.push((arguments[i__4830__auto___34564]));

var G__34565 = (i__4830__auto___34564 + (1));
i__4830__auto___34564 = G__34565;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32679){
var map__32680 = p__32679;
var map__32680__$1 = cljs.core.__destructure_map(map__32680);
var opts = map__32680__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32677){
var G__32678 = cljs.core.first(seq32677);
var seq32677__$1 = cljs.core.next(seq32677);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32678,seq32677__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32686 = arguments.length;
switch (G__32686) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32436__auto___34574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_32714){
var state_val_32718 = (state_32714[(1)]);
if((state_val_32718 === (7))){
var inst_32710 = (state_32714[(2)]);
var state_32714__$1 = state_32714;
var statearr_32729_34581 = state_32714__$1;
(statearr_32729_34581[(2)] = inst_32710);

(statearr_32729_34581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (1))){
var state_32714__$1 = state_32714;
var statearr_32730_34582 = state_32714__$1;
(statearr_32730_34582[(2)] = null);

(statearr_32730_34582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (4))){
var inst_32693 = (state_32714[(7)]);
var inst_32693__$1 = (state_32714[(2)]);
var inst_32694 = (inst_32693__$1 == null);
var state_32714__$1 = (function (){var statearr_32735 = state_32714;
(statearr_32735[(7)] = inst_32693__$1);

return statearr_32735;
})();
if(cljs.core.truth_(inst_32694)){
var statearr_32736_34590 = state_32714__$1;
(statearr_32736_34590[(1)] = (5));

} else {
var statearr_32737_34592 = state_32714__$1;
(statearr_32737_34592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (13))){
var state_32714__$1 = state_32714;
var statearr_32738_34593 = state_32714__$1;
(statearr_32738_34593[(2)] = null);

(statearr_32738_34593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (6))){
var inst_32693 = (state_32714[(7)]);
var state_32714__$1 = state_32714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32714__$1,(11),to,inst_32693);
} else {
if((state_val_32718 === (3))){
var inst_32712 = (state_32714[(2)]);
var state_32714__$1 = state_32714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32714__$1,inst_32712);
} else {
if((state_val_32718 === (12))){
var state_32714__$1 = state_32714;
var statearr_32739_34595 = state_32714__$1;
(statearr_32739_34595[(2)] = null);

(statearr_32739_34595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (2))){
var state_32714__$1 = state_32714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32714__$1,(4),from);
} else {
if((state_val_32718 === (11))){
var inst_32703 = (state_32714[(2)]);
var state_32714__$1 = state_32714;
if(cljs.core.truth_(inst_32703)){
var statearr_32740_34597 = state_32714__$1;
(statearr_32740_34597[(1)] = (12));

} else {
var statearr_32741_34598 = state_32714__$1;
(statearr_32741_34598[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (9))){
var state_32714__$1 = state_32714;
var statearr_32743_34599 = state_32714__$1;
(statearr_32743_34599[(2)] = null);

(statearr_32743_34599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (5))){
var state_32714__$1 = state_32714;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32744_34607 = state_32714__$1;
(statearr_32744_34607[(1)] = (8));

} else {
var statearr_32745_34608 = state_32714__$1;
(statearr_32745_34608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (14))){
var inst_32708 = (state_32714[(2)]);
var state_32714__$1 = state_32714;
var statearr_32746_34609 = state_32714__$1;
(statearr_32746_34609[(2)] = inst_32708);

(statearr_32746_34609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (10))){
var inst_32700 = (state_32714[(2)]);
var state_32714__$1 = state_32714;
var statearr_32747_34613 = state_32714__$1;
(statearr_32747_34613[(2)] = inst_32700);

(statearr_32747_34613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32718 === (8))){
var inst_32697 = cljs.core.async.close_BANG_(to);
var state_32714__$1 = state_32714;
var statearr_32748_34614 = state_32714__$1;
(statearr_32748_34614[(2)] = inst_32697);

(statearr_32748_34614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32139__auto__ = null;
var cljs$core$async$state_machine__32139__auto____0 = (function (){
var statearr_32749 = [null,null,null,null,null,null,null,null];
(statearr_32749[(0)] = cljs$core$async$state_machine__32139__auto__);

(statearr_32749[(1)] = (1));

return statearr_32749;
});
var cljs$core$async$state_machine__32139__auto____1 = (function (state_32714){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_32714);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e32750){var ex__32142__auto__ = e32750;
var statearr_32751_34618 = state_32714;
(statearr_32751_34618[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_32714[(4)]))){
var statearr_32752_34619 = state_32714;
(statearr_32752_34619[(1)] = cljs.core.first((state_32714[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34620 = state_32714;
state_32714 = G__34620;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$state_machine__32139__auto__ = function(state_32714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32139__auto____1.call(this,state_32714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32139__auto____0;
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32139__auto____1;
return cljs$core$async$state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_32753 = f__32437__auto__();
(statearr_32753[(6)] = c__32436__auto___34574);

return statearr_32753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32754){
var vec__32755 = p__32754;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32755,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32755,(1),null);
var job = vec__32755;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32436__auto___34621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_32762){
var state_val_32763 = (state_32762[(1)]);
if((state_val_32763 === (1))){
var state_32762__$1 = state_32762;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32762__$1,(2),res,v);
} else {
if((state_val_32763 === (2))){
var inst_32759 = (state_32762[(2)]);
var inst_32760 = cljs.core.async.close_BANG_(res);
var state_32762__$1 = (function (){var statearr_32764 = state_32762;
(statearr_32764[(7)] = inst_32759);

return statearr_32764;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32762__$1,inst_32760);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____0 = (function (){
var statearr_32765 = [null,null,null,null,null,null,null,null];
(statearr_32765[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__);

(statearr_32765[(1)] = (1));

return statearr_32765;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____1 = (function (state_32762){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_32762);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e32766){var ex__32142__auto__ = e32766;
var statearr_32767_34622 = state_32762;
(statearr_32767_34622[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_32762[(4)]))){
var statearr_32768_34623 = state_32762;
(statearr_32768_34623[(1)] = cljs.core.first((state_32762[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34624 = state_32762;
state_32762 = G__34624;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__ = function(state_32762){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____1.call(this,state_32762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_32769 = f__32437__auto__();
(statearr_32769[(6)] = c__32436__auto___34621);

return statearr_32769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32770){
var vec__32771 = p__32770;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32771,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32771,(1),null);
var job = vec__32771;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___34629 = n;
var __34630 = (0);
while(true){
if((__34630 < n__4706__auto___34629)){
var G__32776_34631 = type;
var G__32776_34632__$1 = (((G__32776_34631 instanceof cljs.core.Keyword))?G__32776_34631.fqn:null);
switch (G__32776_34632__$1) {
case "compute":
var c__32436__auto___34636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34630,c__32436__auto___34636,G__32776_34631,G__32776_34632__$1,n__4706__auto___34629,jobs,results,process,async){
return (function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = ((function (__34630,c__32436__auto___34636,G__32776_34631,G__32776_34632__$1,n__4706__auto___34629,jobs,results,process,async){
return (function (state_32791){
var state_val_32792 = (state_32791[(1)]);
if((state_val_32792 === (1))){
var state_32791__$1 = state_32791;
var statearr_32793_34637 = state_32791__$1;
(statearr_32793_34637[(2)] = null);

(statearr_32793_34637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32792 === (2))){
var state_32791__$1 = state_32791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32791__$1,(4),jobs);
} else {
if((state_val_32792 === (3))){
var inst_32789 = (state_32791[(2)]);
var state_32791__$1 = state_32791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32791__$1,inst_32789);
} else {
if((state_val_32792 === (4))){
var inst_32781 = (state_32791[(2)]);
var inst_32782 = process(inst_32781);
var state_32791__$1 = state_32791;
if(cljs.core.truth_(inst_32782)){
var statearr_32794_34638 = state_32791__$1;
(statearr_32794_34638[(1)] = (5));

} else {
var statearr_32795_34639 = state_32791__$1;
(statearr_32795_34639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32792 === (5))){
var state_32791__$1 = state_32791;
var statearr_32796_34640 = state_32791__$1;
(statearr_32796_34640[(2)] = null);

(statearr_32796_34640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32792 === (6))){
var state_32791__$1 = state_32791;
var statearr_32797_34641 = state_32791__$1;
(statearr_32797_34641[(2)] = null);

(statearr_32797_34641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32792 === (7))){
var inst_32787 = (state_32791[(2)]);
var state_32791__$1 = state_32791;
var statearr_32798_34646 = state_32791__$1;
(statearr_32798_34646[(2)] = inst_32787);

(statearr_32798_34646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34630,c__32436__auto___34636,G__32776_34631,G__32776_34632__$1,n__4706__auto___34629,jobs,results,process,async))
;
return ((function (__34630,switch__32138__auto__,c__32436__auto___34636,G__32776_34631,G__32776_34632__$1,n__4706__auto___34629,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____0 = (function (){
var statearr_32799 = [null,null,null,null,null,null,null];
(statearr_32799[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__);

(statearr_32799[(1)] = (1));

return statearr_32799;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____1 = (function (state_32791){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_32791);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e32800){var ex__32142__auto__ = e32800;
var statearr_32801_34647 = state_32791;
(statearr_32801_34647[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_32791[(4)]))){
var statearr_32802_34650 = state_32791;
(statearr_32802_34650[(1)] = cljs.core.first((state_32791[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34651 = state_32791;
state_32791 = G__34651;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__ = function(state_32791){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____1.call(this,state_32791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__;
})()
;})(__34630,switch__32138__auto__,c__32436__auto___34636,G__32776_34631,G__32776_34632__$1,n__4706__auto___34629,jobs,results,process,async))
})();
var state__32438__auto__ = (function (){var statearr_32803 = f__32437__auto__();
(statearr_32803[(6)] = c__32436__auto___34636);

return statearr_32803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
});})(__34630,c__32436__auto___34636,G__32776_34631,G__32776_34632__$1,n__4706__auto___34629,jobs,results,process,async))
);


break;
case "async":
var c__32436__auto___34652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34630,c__32436__auto___34652,G__32776_34631,G__32776_34632__$1,n__4706__auto___34629,jobs,results,process,async){
return (function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = ((function (__34630,c__32436__auto___34652,G__32776_34631,G__32776_34632__$1,n__4706__auto___34629,jobs,results,process,async){
return (function (state_32816){
var state_val_32817 = (state_32816[(1)]);
if((state_val_32817 === (1))){
var state_32816__$1 = state_32816;
var statearr_32818_34654 = state_32816__$1;
(statearr_32818_34654[(2)] = null);

(statearr_32818_34654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (2))){
var state_32816__$1 = state_32816;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32816__$1,(4),jobs);
} else {
if((state_val_32817 === (3))){
var inst_32814 = (state_32816[(2)]);
var state_32816__$1 = state_32816;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32816__$1,inst_32814);
} else {
if((state_val_32817 === (4))){
var inst_32806 = (state_32816[(2)]);
var inst_32807 = async(inst_32806);
var state_32816__$1 = state_32816;
if(cljs.core.truth_(inst_32807)){
var statearr_32819_34655 = state_32816__$1;
(statearr_32819_34655[(1)] = (5));

} else {
var statearr_32820_34656 = state_32816__$1;
(statearr_32820_34656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (5))){
var state_32816__$1 = state_32816;
var statearr_32821_34657 = state_32816__$1;
(statearr_32821_34657[(2)] = null);

(statearr_32821_34657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (6))){
var state_32816__$1 = state_32816;
var statearr_32822_34658 = state_32816__$1;
(statearr_32822_34658[(2)] = null);

(statearr_32822_34658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32817 === (7))){
var inst_32812 = (state_32816[(2)]);
var state_32816__$1 = state_32816;
var statearr_32823_34659 = state_32816__$1;
(statearr_32823_34659[(2)] = inst_32812);

(statearr_32823_34659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34630,c__32436__auto___34652,G__32776_34631,G__32776_34632__$1,n__4706__auto___34629,jobs,results,process,async))
;
return ((function (__34630,switch__32138__auto__,c__32436__auto___34652,G__32776_34631,G__32776_34632__$1,n__4706__auto___34629,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____0 = (function (){
var statearr_32824 = [null,null,null,null,null,null,null];
(statearr_32824[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__);

(statearr_32824[(1)] = (1));

return statearr_32824;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____1 = (function (state_32816){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_32816);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e32825){var ex__32142__auto__ = e32825;
var statearr_32826_34662 = state_32816;
(statearr_32826_34662[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_32816[(4)]))){
var statearr_32827_34663 = state_32816;
(statearr_32827_34663[(1)] = cljs.core.first((state_32816[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34664 = state_32816;
state_32816 = G__34664;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__ = function(state_32816){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____1.call(this,state_32816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__;
})()
;})(__34630,switch__32138__auto__,c__32436__auto___34652,G__32776_34631,G__32776_34632__$1,n__4706__auto___34629,jobs,results,process,async))
})();
var state__32438__auto__ = (function (){var statearr_32828 = f__32437__auto__();
(statearr_32828[(6)] = c__32436__auto___34652);

return statearr_32828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
});})(__34630,c__32436__auto___34652,G__32776_34631,G__32776_34632__$1,n__4706__auto___34629,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32776_34632__$1)].join('')));

}

var G__34667 = (__34630 + (1));
__34630 = G__34667;
continue;
} else {
}
break;
}

var c__32436__auto___34668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_32850){
var state_val_32851 = (state_32850[(1)]);
if((state_val_32851 === (7))){
var inst_32846 = (state_32850[(2)]);
var state_32850__$1 = state_32850;
var statearr_32856_34669 = state_32850__$1;
(statearr_32856_34669[(2)] = inst_32846);

(statearr_32856_34669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (1))){
var state_32850__$1 = state_32850;
var statearr_32857_34670 = state_32850__$1;
(statearr_32857_34670[(2)] = null);

(statearr_32857_34670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (4))){
var inst_32831 = (state_32850[(7)]);
var inst_32831__$1 = (state_32850[(2)]);
var inst_32832 = (inst_32831__$1 == null);
var state_32850__$1 = (function (){var statearr_32858 = state_32850;
(statearr_32858[(7)] = inst_32831__$1);

return statearr_32858;
})();
if(cljs.core.truth_(inst_32832)){
var statearr_32859_34671 = state_32850__$1;
(statearr_32859_34671[(1)] = (5));

} else {
var statearr_32860_34672 = state_32850__$1;
(statearr_32860_34672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (6))){
var inst_32831 = (state_32850[(7)]);
var inst_32836 = (state_32850[(8)]);
var inst_32836__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32837 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32838 = [inst_32831,inst_32836__$1];
var inst_32839 = (new cljs.core.PersistentVector(null,2,(5),inst_32837,inst_32838,null));
var state_32850__$1 = (function (){var statearr_32863 = state_32850;
(statearr_32863[(8)] = inst_32836__$1);

return statearr_32863;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32850__$1,(8),jobs,inst_32839);
} else {
if((state_val_32851 === (3))){
var inst_32848 = (state_32850[(2)]);
var state_32850__$1 = state_32850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32850__$1,inst_32848);
} else {
if((state_val_32851 === (2))){
var state_32850__$1 = state_32850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32850__$1,(4),from);
} else {
if((state_val_32851 === (9))){
var inst_32843 = (state_32850[(2)]);
var state_32850__$1 = (function (){var statearr_32869 = state_32850;
(statearr_32869[(9)] = inst_32843);

return statearr_32869;
})();
var statearr_32870_34675 = state_32850__$1;
(statearr_32870_34675[(2)] = null);

(statearr_32870_34675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (5))){
var inst_32834 = cljs.core.async.close_BANG_(jobs);
var state_32850__$1 = state_32850;
var statearr_32871_34676 = state_32850__$1;
(statearr_32871_34676[(2)] = inst_32834);

(statearr_32871_34676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (8))){
var inst_32836 = (state_32850[(8)]);
var inst_32841 = (state_32850[(2)]);
var state_32850__$1 = (function (){var statearr_32872 = state_32850;
(statearr_32872[(10)] = inst_32841);

return statearr_32872;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32850__$1,(9),results,inst_32836);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____0 = (function (){
var statearr_32873 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__);

(statearr_32873[(1)] = (1));

return statearr_32873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____1 = (function (state_32850){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_32850);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e32874){var ex__32142__auto__ = e32874;
var statearr_32875_34679 = state_32850;
(statearr_32875_34679[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_32850[(4)]))){
var statearr_32876_34680 = state_32850;
(statearr_32876_34680[(1)] = cljs.core.first((state_32850[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34681 = state_32850;
state_32850 = G__34681;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__ = function(state_32850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____1.call(this,state_32850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_32877 = f__32437__auto__();
(statearr_32877[(6)] = c__32436__auto___34668);

return statearr_32877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));


var c__32436__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_32915){
var state_val_32916 = (state_32915[(1)]);
if((state_val_32916 === (7))){
var inst_32911 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32917_34682 = state_32915__$1;
(statearr_32917_34682[(2)] = inst_32911);

(statearr_32917_34682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (20))){
var state_32915__$1 = state_32915;
var statearr_32918_34683 = state_32915__$1;
(statearr_32918_34683[(2)] = null);

(statearr_32918_34683[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (1))){
var state_32915__$1 = state_32915;
var statearr_32919_34684 = state_32915__$1;
(statearr_32919_34684[(2)] = null);

(statearr_32919_34684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (4))){
var inst_32880 = (state_32915[(7)]);
var inst_32880__$1 = (state_32915[(2)]);
var inst_32881 = (inst_32880__$1 == null);
var state_32915__$1 = (function (){var statearr_32921 = state_32915;
(statearr_32921[(7)] = inst_32880__$1);

return statearr_32921;
})();
if(cljs.core.truth_(inst_32881)){
var statearr_32923_34685 = state_32915__$1;
(statearr_32923_34685[(1)] = (5));

} else {
var statearr_32924_34686 = state_32915__$1;
(statearr_32924_34686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (15))){
var inst_32893 = (state_32915[(8)]);
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32915__$1,(18),to,inst_32893);
} else {
if((state_val_32916 === (21))){
var inst_32906 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32925_34688 = state_32915__$1;
(statearr_32925_34688[(2)] = inst_32906);

(statearr_32925_34688[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (13))){
var inst_32908 = (state_32915[(2)]);
var state_32915__$1 = (function (){var statearr_32926 = state_32915;
(statearr_32926[(9)] = inst_32908);

return statearr_32926;
})();
var statearr_32927_34690 = state_32915__$1;
(statearr_32927_34690[(2)] = null);

(statearr_32927_34690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (6))){
var inst_32880 = (state_32915[(7)]);
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32915__$1,(11),inst_32880);
} else {
if((state_val_32916 === (17))){
var inst_32901 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
if(cljs.core.truth_(inst_32901)){
var statearr_32930_34691 = state_32915__$1;
(statearr_32930_34691[(1)] = (19));

} else {
var statearr_32931_34692 = state_32915__$1;
(statearr_32931_34692[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (3))){
var inst_32913 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32915__$1,inst_32913);
} else {
if((state_val_32916 === (12))){
var inst_32890 = (state_32915[(10)]);
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32915__$1,(14),inst_32890);
} else {
if((state_val_32916 === (2))){
var state_32915__$1 = state_32915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32915__$1,(4),results);
} else {
if((state_val_32916 === (19))){
var state_32915__$1 = state_32915;
var statearr_32932_34693 = state_32915__$1;
(statearr_32932_34693[(2)] = null);

(statearr_32932_34693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (11))){
var inst_32890 = (state_32915[(2)]);
var state_32915__$1 = (function (){var statearr_32933 = state_32915;
(statearr_32933[(10)] = inst_32890);

return statearr_32933;
})();
var statearr_32934_34694 = state_32915__$1;
(statearr_32934_34694[(2)] = null);

(statearr_32934_34694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (9))){
var state_32915__$1 = state_32915;
var statearr_32935_34695 = state_32915__$1;
(statearr_32935_34695[(2)] = null);

(statearr_32935_34695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (5))){
var state_32915__$1 = state_32915;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32936_34696 = state_32915__$1;
(statearr_32936_34696[(1)] = (8));

} else {
var statearr_32937_34697 = state_32915__$1;
(statearr_32937_34697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (14))){
var inst_32893 = (state_32915[(8)]);
var inst_32895 = (state_32915[(11)]);
var inst_32893__$1 = (state_32915[(2)]);
var inst_32894 = (inst_32893__$1 == null);
var inst_32895__$1 = cljs.core.not(inst_32894);
var state_32915__$1 = (function (){var statearr_32938 = state_32915;
(statearr_32938[(8)] = inst_32893__$1);

(statearr_32938[(11)] = inst_32895__$1);

return statearr_32938;
})();
if(inst_32895__$1){
var statearr_32939_34698 = state_32915__$1;
(statearr_32939_34698[(1)] = (15));

} else {
var statearr_32940_34699 = state_32915__$1;
(statearr_32940_34699[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (16))){
var inst_32895 = (state_32915[(11)]);
var state_32915__$1 = state_32915;
var statearr_32941_34701 = state_32915__$1;
(statearr_32941_34701[(2)] = inst_32895);

(statearr_32941_34701[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (10))){
var inst_32887 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32942_34703 = state_32915__$1;
(statearr_32942_34703[(2)] = inst_32887);

(statearr_32942_34703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (18))){
var inst_32898 = (state_32915[(2)]);
var state_32915__$1 = state_32915;
var statearr_32943_34704 = state_32915__$1;
(statearr_32943_34704[(2)] = inst_32898);

(statearr_32943_34704[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32916 === (8))){
var inst_32884 = cljs.core.async.close_BANG_(to);
var state_32915__$1 = state_32915;
var statearr_32944_34705 = state_32915__$1;
(statearr_32944_34705[(2)] = inst_32884);

(statearr_32944_34705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____0 = (function (){
var statearr_32945 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32945[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__);

(statearr_32945[(1)] = (1));

return statearr_32945;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____1 = (function (state_32915){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_32915);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e32946){var ex__32142__auto__ = e32946;
var statearr_32947_34706 = state_32915;
(statearr_32947_34706[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_32915[(4)]))){
var statearr_32951_34707 = state_32915;
(statearr_32951_34707[(1)] = cljs.core.first((state_32915[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34708 = state_32915;
state_32915 = G__34708;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__ = function(state_32915){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____1.call(this,state_32915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32139__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_32953 = f__32437__auto__();
(statearr_32953[(6)] = c__32436__auto__);

return statearr_32953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));

return c__32436__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32955 = arguments.length;
switch (G__32955) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32957 = arguments.length;
switch (G__32957) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32959 = arguments.length;
switch (G__32959) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32436__auto___34716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_32985){
var state_val_32986 = (state_32985[(1)]);
if((state_val_32986 === (7))){
var inst_32981 = (state_32985[(2)]);
var state_32985__$1 = state_32985;
var statearr_32987_34718 = state_32985__$1;
(statearr_32987_34718[(2)] = inst_32981);

(statearr_32987_34718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32986 === (1))){
var state_32985__$1 = state_32985;
var statearr_32988_34719 = state_32985__$1;
(statearr_32988_34719[(2)] = null);

(statearr_32988_34719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32986 === (4))){
var inst_32962 = (state_32985[(7)]);
var inst_32962__$1 = (state_32985[(2)]);
var inst_32963 = (inst_32962__$1 == null);
var state_32985__$1 = (function (){var statearr_32989 = state_32985;
(statearr_32989[(7)] = inst_32962__$1);

return statearr_32989;
})();
if(cljs.core.truth_(inst_32963)){
var statearr_32990_34721 = state_32985__$1;
(statearr_32990_34721[(1)] = (5));

} else {
var statearr_32991_34723 = state_32985__$1;
(statearr_32991_34723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32986 === (13))){
var state_32985__$1 = state_32985;
var statearr_32992_34727 = state_32985__$1;
(statearr_32992_34727[(2)] = null);

(statearr_32992_34727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32986 === (6))){
var inst_32962 = (state_32985[(7)]);
var inst_32968 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32962) : p.call(null,inst_32962));
var state_32985__$1 = state_32985;
if(cljs.core.truth_(inst_32968)){
var statearr_32993_34728 = state_32985__$1;
(statearr_32993_34728[(1)] = (9));

} else {
var statearr_32994_34729 = state_32985__$1;
(statearr_32994_34729[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32986 === (3))){
var inst_32983 = (state_32985[(2)]);
var state_32985__$1 = state_32985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32985__$1,inst_32983);
} else {
if((state_val_32986 === (12))){
var state_32985__$1 = state_32985;
var statearr_32995_34730 = state_32985__$1;
(statearr_32995_34730[(2)] = null);

(statearr_32995_34730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32986 === (2))){
var state_32985__$1 = state_32985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32985__$1,(4),ch);
} else {
if((state_val_32986 === (11))){
var inst_32962 = (state_32985[(7)]);
var inst_32972 = (state_32985[(2)]);
var state_32985__$1 = state_32985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32985__$1,(8),inst_32972,inst_32962);
} else {
if((state_val_32986 === (9))){
var state_32985__$1 = state_32985;
var statearr_32996_34735 = state_32985__$1;
(statearr_32996_34735[(2)] = tc);

(statearr_32996_34735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32986 === (5))){
var inst_32965 = cljs.core.async.close_BANG_(tc);
var inst_32966 = cljs.core.async.close_BANG_(fc);
var state_32985__$1 = (function (){var statearr_32997 = state_32985;
(statearr_32997[(8)] = inst_32965);

return statearr_32997;
})();
var statearr_32998_34736 = state_32985__$1;
(statearr_32998_34736[(2)] = inst_32966);

(statearr_32998_34736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32986 === (14))){
var inst_32979 = (state_32985[(2)]);
var state_32985__$1 = state_32985;
var statearr_32999_34737 = state_32985__$1;
(statearr_32999_34737[(2)] = inst_32979);

(statearr_32999_34737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32986 === (10))){
var state_32985__$1 = state_32985;
var statearr_33000_34738 = state_32985__$1;
(statearr_33000_34738[(2)] = fc);

(statearr_33000_34738[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32986 === (8))){
var inst_32974 = (state_32985[(2)]);
var state_32985__$1 = state_32985;
if(cljs.core.truth_(inst_32974)){
var statearr_33001_34739 = state_32985__$1;
(statearr_33001_34739[(1)] = (12));

} else {
var statearr_33002_34740 = state_32985__$1;
(statearr_33002_34740[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32139__auto__ = null;
var cljs$core$async$state_machine__32139__auto____0 = (function (){
var statearr_33003 = [null,null,null,null,null,null,null,null,null];
(statearr_33003[(0)] = cljs$core$async$state_machine__32139__auto__);

(statearr_33003[(1)] = (1));

return statearr_33003;
});
var cljs$core$async$state_machine__32139__auto____1 = (function (state_32985){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_32985);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e33004){var ex__32142__auto__ = e33004;
var statearr_33005_34741 = state_32985;
(statearr_33005_34741[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_32985[(4)]))){
var statearr_33006_34742 = state_32985;
(statearr_33006_34742[(1)] = cljs.core.first((state_32985[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34743 = state_32985;
state_32985 = G__34743;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$state_machine__32139__auto__ = function(state_32985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32139__auto____1.call(this,state_32985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32139__auto____0;
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32139__auto____1;
return cljs$core$async$state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_33007 = f__32437__auto__();
(statearr_33007[(6)] = c__32436__auto___34716);

return statearr_33007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32436__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_33029){
var state_val_33030 = (state_33029[(1)]);
if((state_val_33030 === (7))){
var inst_33025 = (state_33029[(2)]);
var state_33029__$1 = state_33029;
var statearr_33031_34744 = state_33029__$1;
(statearr_33031_34744[(2)] = inst_33025);

(statearr_33031_34744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33030 === (1))){
var inst_33008 = init;
var inst_33009 = inst_33008;
var state_33029__$1 = (function (){var statearr_33032 = state_33029;
(statearr_33032[(7)] = inst_33009);

return statearr_33032;
})();
var statearr_33033_34745 = state_33029__$1;
(statearr_33033_34745[(2)] = null);

(statearr_33033_34745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33030 === (4))){
var inst_33012 = (state_33029[(8)]);
var inst_33012__$1 = (state_33029[(2)]);
var inst_33013 = (inst_33012__$1 == null);
var state_33029__$1 = (function (){var statearr_33034 = state_33029;
(statearr_33034[(8)] = inst_33012__$1);

return statearr_33034;
})();
if(cljs.core.truth_(inst_33013)){
var statearr_33035_34746 = state_33029__$1;
(statearr_33035_34746[(1)] = (5));

} else {
var statearr_33036_34747 = state_33029__$1;
(statearr_33036_34747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33030 === (6))){
var inst_33009 = (state_33029[(7)]);
var inst_33016 = (state_33029[(9)]);
var inst_33012 = (state_33029[(8)]);
var inst_33016__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33009,inst_33012) : f.call(null,inst_33009,inst_33012));
var inst_33017 = cljs.core.reduced_QMARK_(inst_33016__$1);
var state_33029__$1 = (function (){var statearr_33037 = state_33029;
(statearr_33037[(9)] = inst_33016__$1);

return statearr_33037;
})();
if(inst_33017){
var statearr_33044_34750 = state_33029__$1;
(statearr_33044_34750[(1)] = (8));

} else {
var statearr_33045_34751 = state_33029__$1;
(statearr_33045_34751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33030 === (3))){
var inst_33027 = (state_33029[(2)]);
var state_33029__$1 = state_33029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33029__$1,inst_33027);
} else {
if((state_val_33030 === (2))){
var state_33029__$1 = state_33029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33029__$1,(4),ch);
} else {
if((state_val_33030 === (9))){
var inst_33016 = (state_33029[(9)]);
var inst_33009 = inst_33016;
var state_33029__$1 = (function (){var statearr_33047 = state_33029;
(statearr_33047[(7)] = inst_33009);

return statearr_33047;
})();
var statearr_33048_34752 = state_33029__$1;
(statearr_33048_34752[(2)] = null);

(statearr_33048_34752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33030 === (5))){
var inst_33009 = (state_33029[(7)]);
var state_33029__$1 = state_33029;
var statearr_33049_34753 = state_33029__$1;
(statearr_33049_34753[(2)] = inst_33009);

(statearr_33049_34753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33030 === (10))){
var inst_33023 = (state_33029[(2)]);
var state_33029__$1 = state_33029;
var statearr_33051_34754 = state_33029__$1;
(statearr_33051_34754[(2)] = inst_33023);

(statearr_33051_34754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33030 === (8))){
var inst_33016 = (state_33029[(9)]);
var inst_33019 = cljs.core.deref(inst_33016);
var state_33029__$1 = state_33029;
var statearr_33052_34755 = state_33029__$1;
(statearr_33052_34755[(2)] = inst_33019);

(statearr_33052_34755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32139__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32139__auto____0 = (function (){
var statearr_33055 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33055[(0)] = cljs$core$async$reduce_$_state_machine__32139__auto__);

(statearr_33055[(1)] = (1));

return statearr_33055;
});
var cljs$core$async$reduce_$_state_machine__32139__auto____1 = (function (state_33029){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_33029);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e33056){var ex__32142__auto__ = e33056;
var statearr_33058_34756 = state_33029;
(statearr_33058_34756[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_33029[(4)]))){
var statearr_33059_34757 = state_33029;
(statearr_33059_34757[(1)] = cljs.core.first((state_33029[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34758 = state_33029;
state_33029 = G__34758;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32139__auto__ = function(state_33029){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32139__auto____1.call(this,state_33029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32139__auto____0;
cljs$core$async$reduce_$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32139__auto____1;
return cljs$core$async$reduce_$_state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_33060 = f__32437__auto__();
(statearr_33060[(6)] = c__32436__auto__);

return statearr_33060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));

return c__32436__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32436__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_33066){
var state_val_33067 = (state_33066[(1)]);
if((state_val_33067 === (1))){
var inst_33061 = cljs.core.async.reduce(f__$1,init,ch);
var state_33066__$1 = state_33066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33066__$1,(2),inst_33061);
} else {
if((state_val_33067 === (2))){
var inst_33063 = (state_33066[(2)]);
var inst_33064 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33063) : f__$1.call(null,inst_33063));
var state_33066__$1 = state_33066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33066__$1,inst_33064);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32139__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32139__auto____0 = (function (){
var statearr_33069 = [null,null,null,null,null,null,null];
(statearr_33069[(0)] = cljs$core$async$transduce_$_state_machine__32139__auto__);

(statearr_33069[(1)] = (1));

return statearr_33069;
});
var cljs$core$async$transduce_$_state_machine__32139__auto____1 = (function (state_33066){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_33066);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e33070){var ex__32142__auto__ = e33070;
var statearr_33071_34769 = state_33066;
(statearr_33071_34769[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_33066[(4)]))){
var statearr_33072_34770 = state_33066;
(statearr_33072_34770[(1)] = cljs.core.first((state_33066[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34771 = state_33066;
state_33066 = G__34771;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32139__auto__ = function(state_33066){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32139__auto____1.call(this,state_33066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32139__auto____0;
cljs$core$async$transduce_$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32139__auto____1;
return cljs$core$async$transduce_$_state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_33074 = f__32437__auto__();
(statearr_33074[(6)] = c__32436__auto__);

return statearr_33074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));

return c__32436__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33084 = arguments.length;
switch (G__33084) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32436__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_33123){
var state_val_33124 = (state_33123[(1)]);
if((state_val_33124 === (7))){
var inst_33105 = (state_33123[(2)]);
var state_33123__$1 = state_33123;
var statearr_33125_34779 = state_33123__$1;
(statearr_33125_34779[(2)] = inst_33105);

(statearr_33125_34779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (1))){
var inst_33099 = cljs.core.seq(coll);
var inst_33100 = inst_33099;
var state_33123__$1 = (function (){var statearr_33126 = state_33123;
(statearr_33126[(7)] = inst_33100);

return statearr_33126;
})();
var statearr_33127_34784 = state_33123__$1;
(statearr_33127_34784[(2)] = null);

(statearr_33127_34784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (4))){
var inst_33100 = (state_33123[(7)]);
var inst_33103 = cljs.core.first(inst_33100);
var state_33123__$1 = state_33123;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33123__$1,(7),ch,inst_33103);
} else {
if((state_val_33124 === (13))){
var inst_33117 = (state_33123[(2)]);
var state_33123__$1 = state_33123;
var statearr_33128_34789 = state_33123__$1;
(statearr_33128_34789[(2)] = inst_33117);

(statearr_33128_34789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (6))){
var inst_33108 = (state_33123[(2)]);
var state_33123__$1 = state_33123;
if(cljs.core.truth_(inst_33108)){
var statearr_33129_34794 = state_33123__$1;
(statearr_33129_34794[(1)] = (8));

} else {
var statearr_33130_34795 = state_33123__$1;
(statearr_33130_34795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (3))){
var inst_33121 = (state_33123[(2)]);
var state_33123__$1 = state_33123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33123__$1,inst_33121);
} else {
if((state_val_33124 === (12))){
var state_33123__$1 = state_33123;
var statearr_33132_34796 = state_33123__$1;
(statearr_33132_34796[(2)] = null);

(statearr_33132_34796[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (2))){
var inst_33100 = (state_33123[(7)]);
var state_33123__$1 = state_33123;
if(cljs.core.truth_(inst_33100)){
var statearr_33134_34798 = state_33123__$1;
(statearr_33134_34798[(1)] = (4));

} else {
var statearr_33136_34799 = state_33123__$1;
(statearr_33136_34799[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (11))){
var inst_33114 = cljs.core.async.close_BANG_(ch);
var state_33123__$1 = state_33123;
var statearr_33137_34804 = state_33123__$1;
(statearr_33137_34804[(2)] = inst_33114);

(statearr_33137_34804[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (9))){
var state_33123__$1 = state_33123;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33138_34805 = state_33123__$1;
(statearr_33138_34805[(1)] = (11));

} else {
var statearr_33139_34806 = state_33123__$1;
(statearr_33139_34806[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (5))){
var inst_33100 = (state_33123[(7)]);
var state_33123__$1 = state_33123;
var statearr_33141_34810 = state_33123__$1;
(statearr_33141_34810[(2)] = inst_33100);

(statearr_33141_34810[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (10))){
var inst_33119 = (state_33123[(2)]);
var state_33123__$1 = state_33123;
var statearr_33142_34811 = state_33123__$1;
(statearr_33142_34811[(2)] = inst_33119);

(statearr_33142_34811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33124 === (8))){
var inst_33100 = (state_33123[(7)]);
var inst_33110 = cljs.core.next(inst_33100);
var inst_33100__$1 = inst_33110;
var state_33123__$1 = (function (){var statearr_33151 = state_33123;
(statearr_33151[(7)] = inst_33100__$1);

return statearr_33151;
})();
var statearr_33156_34812 = state_33123__$1;
(statearr_33156_34812[(2)] = null);

(statearr_33156_34812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32139__auto__ = null;
var cljs$core$async$state_machine__32139__auto____0 = (function (){
var statearr_33165 = [null,null,null,null,null,null,null,null];
(statearr_33165[(0)] = cljs$core$async$state_machine__32139__auto__);

(statearr_33165[(1)] = (1));

return statearr_33165;
});
var cljs$core$async$state_machine__32139__auto____1 = (function (state_33123){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_33123);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e33166){var ex__32142__auto__ = e33166;
var statearr_33167_34817 = state_33123;
(statearr_33167_34817[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_33123[(4)]))){
var statearr_33168_34819 = state_33123;
(statearr_33168_34819[(1)] = cljs.core.first((state_33123[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34820 = state_33123;
state_33123 = G__34820;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$state_machine__32139__auto__ = function(state_33123){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32139__auto____1.call(this,state_33123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32139__auto____0;
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32139__auto____1;
return cljs$core$async$state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_33169 = f__32437__auto__();
(statearr_33169[(6)] = c__32436__auto__);

return statearr_33169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));

return c__32436__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33172 = arguments.length;
switch (G__33172) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34826 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34826(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34827 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34827(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34828 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34828(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34829 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34829(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33175 = (function (ch,cs,meta33176){
this.ch = ch;
this.cs = cs;
this.meta33176 = meta33176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33177,meta33176__$1){
var self__ = this;
var _33177__$1 = this;
return (new cljs.core.async.t_cljs$core$async33175(self__.ch,self__.cs,meta33176__$1));
}));

(cljs.core.async.t_cljs$core$async33175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33177){
var self__ = this;
var _33177__$1 = this;
return self__.meta33176;
}));

(cljs.core.async.t_cljs$core$async33175.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33175.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33175.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33175.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33175.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33175.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33176","meta33176",-1112682115,null)], null);
}));

(cljs.core.async.t_cljs$core$async33175.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33175");

(cljs.core.async.t_cljs$core$async33175.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async33175");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33175.
 */
cljs.core.async.__GT_t_cljs$core$async33175 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33175(ch__$1,cs__$1,meta33176){
return (new cljs.core.async.t_cljs$core$async33175(ch__$1,cs__$1,meta33176));
});

}

return (new cljs.core.async.t_cljs$core$async33175(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32436__auto___34838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_33313){
var state_val_33314 = (state_33313[(1)]);
if((state_val_33314 === (7))){
var inst_33309 = (state_33313[(2)]);
var state_33313__$1 = state_33313;
var statearr_33315_34839 = state_33313__$1;
(statearr_33315_34839[(2)] = inst_33309);

(statearr_33315_34839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (20))){
var inst_33213 = (state_33313[(7)]);
var inst_33225 = cljs.core.first(inst_33213);
var inst_33226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33225,(0),null);
var inst_33227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33225,(1),null);
var state_33313__$1 = (function (){var statearr_33317 = state_33313;
(statearr_33317[(8)] = inst_33226);

return statearr_33317;
})();
if(cljs.core.truth_(inst_33227)){
var statearr_33318_34840 = state_33313__$1;
(statearr_33318_34840[(1)] = (22));

} else {
var statearr_33319_34841 = state_33313__$1;
(statearr_33319_34841[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (27))){
var inst_33263 = (state_33313[(9)]);
var inst_33256 = (state_33313[(10)]);
var inst_33258 = (state_33313[(11)]);
var inst_33181 = (state_33313[(12)]);
var inst_33263__$1 = cljs.core._nth(inst_33256,inst_33258);
var inst_33264 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33263__$1,inst_33181,done);
var state_33313__$1 = (function (){var statearr_33320 = state_33313;
(statearr_33320[(9)] = inst_33263__$1);

return statearr_33320;
})();
if(cljs.core.truth_(inst_33264)){
var statearr_33321_34842 = state_33313__$1;
(statearr_33321_34842[(1)] = (30));

} else {
var statearr_33322_34843 = state_33313__$1;
(statearr_33322_34843[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (1))){
var state_33313__$1 = state_33313;
var statearr_33323_34844 = state_33313__$1;
(statearr_33323_34844[(2)] = null);

(statearr_33323_34844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (24))){
var inst_33213 = (state_33313[(7)]);
var inst_33232 = (state_33313[(2)]);
var inst_33233 = cljs.core.next(inst_33213);
var inst_33191 = inst_33233;
var inst_33192 = null;
var inst_33193 = (0);
var inst_33194 = (0);
var state_33313__$1 = (function (){var statearr_33324 = state_33313;
(statearr_33324[(13)] = inst_33192);

(statearr_33324[(14)] = inst_33191);

(statearr_33324[(15)] = inst_33193);

(statearr_33324[(16)] = inst_33232);

(statearr_33324[(17)] = inst_33194);

return statearr_33324;
})();
var statearr_33325_34847 = state_33313__$1;
(statearr_33325_34847[(2)] = null);

(statearr_33325_34847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (39))){
var state_33313__$1 = state_33313;
var statearr_33329_34848 = state_33313__$1;
(statearr_33329_34848[(2)] = null);

(statearr_33329_34848[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (4))){
var inst_33181 = (state_33313[(12)]);
var inst_33181__$1 = (state_33313[(2)]);
var inst_33182 = (inst_33181__$1 == null);
var state_33313__$1 = (function (){var statearr_33330 = state_33313;
(statearr_33330[(12)] = inst_33181__$1);

return statearr_33330;
})();
if(cljs.core.truth_(inst_33182)){
var statearr_33331_34849 = state_33313__$1;
(statearr_33331_34849[(1)] = (5));

} else {
var statearr_33332_34850 = state_33313__$1;
(statearr_33332_34850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (15))){
var inst_33192 = (state_33313[(13)]);
var inst_33191 = (state_33313[(14)]);
var inst_33193 = (state_33313[(15)]);
var inst_33194 = (state_33313[(17)]);
var inst_33209 = (state_33313[(2)]);
var inst_33210 = (inst_33194 + (1));
var tmp33326 = inst_33192;
var tmp33327 = inst_33191;
var tmp33328 = inst_33193;
var inst_33191__$1 = tmp33327;
var inst_33192__$1 = tmp33326;
var inst_33193__$1 = tmp33328;
var inst_33194__$1 = inst_33210;
var state_33313__$1 = (function (){var statearr_33334 = state_33313;
(statearr_33334[(13)] = inst_33192__$1);

(statearr_33334[(14)] = inst_33191__$1);

(statearr_33334[(15)] = inst_33193__$1);

(statearr_33334[(17)] = inst_33194__$1);

(statearr_33334[(18)] = inst_33209);

return statearr_33334;
})();
var statearr_33335_34854 = state_33313__$1;
(statearr_33335_34854[(2)] = null);

(statearr_33335_34854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (21))){
var inst_33236 = (state_33313[(2)]);
var state_33313__$1 = state_33313;
var statearr_33339_34856 = state_33313__$1;
(statearr_33339_34856[(2)] = inst_33236);

(statearr_33339_34856[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (31))){
var inst_33263 = (state_33313[(9)]);
var inst_33267 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33263);
var state_33313__$1 = state_33313;
var statearr_33340_34857 = state_33313__$1;
(statearr_33340_34857[(2)] = inst_33267);

(statearr_33340_34857[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (32))){
var inst_33257 = (state_33313[(19)]);
var inst_33255 = (state_33313[(20)]);
var inst_33256 = (state_33313[(10)]);
var inst_33258 = (state_33313[(11)]);
var inst_33269 = (state_33313[(2)]);
var inst_33270 = (inst_33258 + (1));
var tmp33336 = inst_33257;
var tmp33337 = inst_33255;
var tmp33338 = inst_33256;
var inst_33255__$1 = tmp33337;
var inst_33256__$1 = tmp33338;
var inst_33257__$1 = tmp33336;
var inst_33258__$1 = inst_33270;
var state_33313__$1 = (function (){var statearr_33341 = state_33313;
(statearr_33341[(19)] = inst_33257__$1);

(statearr_33341[(21)] = inst_33269);

(statearr_33341[(20)] = inst_33255__$1);

(statearr_33341[(10)] = inst_33256__$1);

(statearr_33341[(11)] = inst_33258__$1);

return statearr_33341;
})();
var statearr_33342_34860 = state_33313__$1;
(statearr_33342_34860[(2)] = null);

(statearr_33342_34860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (40))){
var inst_33282 = (state_33313[(22)]);
var inst_33286 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33282);
var state_33313__$1 = state_33313;
var statearr_33343_34861 = state_33313__$1;
(statearr_33343_34861[(2)] = inst_33286);

(statearr_33343_34861[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (33))){
var inst_33273 = (state_33313[(23)]);
var inst_33275 = cljs.core.chunked_seq_QMARK_(inst_33273);
var state_33313__$1 = state_33313;
if(inst_33275){
var statearr_33345_34862 = state_33313__$1;
(statearr_33345_34862[(1)] = (36));

} else {
var statearr_33346_34863 = state_33313__$1;
(statearr_33346_34863[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (13))){
var inst_33203 = (state_33313[(24)]);
var inst_33206 = cljs.core.async.close_BANG_(inst_33203);
var state_33313__$1 = state_33313;
var statearr_33347_34864 = state_33313__$1;
(statearr_33347_34864[(2)] = inst_33206);

(statearr_33347_34864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (22))){
var inst_33226 = (state_33313[(8)]);
var inst_33229 = cljs.core.async.close_BANG_(inst_33226);
var state_33313__$1 = state_33313;
var statearr_33348_34865 = state_33313__$1;
(statearr_33348_34865[(2)] = inst_33229);

(statearr_33348_34865[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (36))){
var inst_33273 = (state_33313[(23)]);
var inst_33277 = cljs.core.chunk_first(inst_33273);
var inst_33278 = cljs.core.chunk_rest(inst_33273);
var inst_33279 = cljs.core.count(inst_33277);
var inst_33255 = inst_33278;
var inst_33256 = inst_33277;
var inst_33257 = inst_33279;
var inst_33258 = (0);
var state_33313__$1 = (function (){var statearr_33349 = state_33313;
(statearr_33349[(19)] = inst_33257);

(statearr_33349[(20)] = inst_33255);

(statearr_33349[(10)] = inst_33256);

(statearr_33349[(11)] = inst_33258);

return statearr_33349;
})();
var statearr_33350_34866 = state_33313__$1;
(statearr_33350_34866[(2)] = null);

(statearr_33350_34866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (41))){
var inst_33273 = (state_33313[(23)]);
var inst_33288 = (state_33313[(2)]);
var inst_33289 = cljs.core.next(inst_33273);
var inst_33255 = inst_33289;
var inst_33256 = null;
var inst_33257 = (0);
var inst_33258 = (0);
var state_33313__$1 = (function (){var statearr_33351 = state_33313;
(statearr_33351[(19)] = inst_33257);

(statearr_33351[(25)] = inst_33288);

(statearr_33351[(20)] = inst_33255);

(statearr_33351[(10)] = inst_33256);

(statearr_33351[(11)] = inst_33258);

return statearr_33351;
})();
var statearr_33352_34868 = state_33313__$1;
(statearr_33352_34868[(2)] = null);

(statearr_33352_34868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (43))){
var state_33313__$1 = state_33313;
var statearr_33353_34872 = state_33313__$1;
(statearr_33353_34872[(2)] = null);

(statearr_33353_34872[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (29))){
var inst_33297 = (state_33313[(2)]);
var state_33313__$1 = state_33313;
var statearr_33355_34873 = state_33313__$1;
(statearr_33355_34873[(2)] = inst_33297);

(statearr_33355_34873[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (44))){
var inst_33306 = (state_33313[(2)]);
var state_33313__$1 = (function (){var statearr_33356 = state_33313;
(statearr_33356[(26)] = inst_33306);

return statearr_33356;
})();
var statearr_33357_34874 = state_33313__$1;
(statearr_33357_34874[(2)] = null);

(statearr_33357_34874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (6))){
var inst_33246 = (state_33313[(27)]);
var inst_33245 = cljs.core.deref(cs);
var inst_33246__$1 = cljs.core.keys(inst_33245);
var inst_33247 = cljs.core.count(inst_33246__$1);
var inst_33248 = cljs.core.reset_BANG_(dctr,inst_33247);
var inst_33254 = cljs.core.seq(inst_33246__$1);
var inst_33255 = inst_33254;
var inst_33256 = null;
var inst_33257 = (0);
var inst_33258 = (0);
var state_33313__$1 = (function (){var statearr_33358 = state_33313;
(statearr_33358[(19)] = inst_33257);

(statearr_33358[(20)] = inst_33255);

(statearr_33358[(10)] = inst_33256);

(statearr_33358[(27)] = inst_33246__$1);

(statearr_33358[(11)] = inst_33258);

(statearr_33358[(28)] = inst_33248);

return statearr_33358;
})();
var statearr_33359_34879 = state_33313__$1;
(statearr_33359_34879[(2)] = null);

(statearr_33359_34879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (28))){
var inst_33255 = (state_33313[(20)]);
var inst_33273 = (state_33313[(23)]);
var inst_33273__$1 = cljs.core.seq(inst_33255);
var state_33313__$1 = (function (){var statearr_33360 = state_33313;
(statearr_33360[(23)] = inst_33273__$1);

return statearr_33360;
})();
if(inst_33273__$1){
var statearr_33361_34880 = state_33313__$1;
(statearr_33361_34880[(1)] = (33));

} else {
var statearr_33362_34881 = state_33313__$1;
(statearr_33362_34881[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (25))){
var inst_33257 = (state_33313[(19)]);
var inst_33258 = (state_33313[(11)]);
var inst_33260 = (inst_33258 < inst_33257);
var inst_33261 = inst_33260;
var state_33313__$1 = state_33313;
if(cljs.core.truth_(inst_33261)){
var statearr_33363_34890 = state_33313__$1;
(statearr_33363_34890[(1)] = (27));

} else {
var statearr_33364_34891 = state_33313__$1;
(statearr_33364_34891[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (34))){
var state_33313__$1 = state_33313;
var statearr_33366_34893 = state_33313__$1;
(statearr_33366_34893[(2)] = null);

(statearr_33366_34893[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (17))){
var state_33313__$1 = state_33313;
var statearr_33367_34900 = state_33313__$1;
(statearr_33367_34900[(2)] = null);

(statearr_33367_34900[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (3))){
var inst_33311 = (state_33313[(2)]);
var state_33313__$1 = state_33313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33313__$1,inst_33311);
} else {
if((state_val_33314 === (12))){
var inst_33241 = (state_33313[(2)]);
var state_33313__$1 = state_33313;
var statearr_33368_34901 = state_33313__$1;
(statearr_33368_34901[(2)] = inst_33241);

(statearr_33368_34901[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (2))){
var state_33313__$1 = state_33313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33313__$1,(4),ch);
} else {
if((state_val_33314 === (23))){
var state_33313__$1 = state_33313;
var statearr_33369_34902 = state_33313__$1;
(statearr_33369_34902[(2)] = null);

(statearr_33369_34902[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (35))){
var inst_33295 = (state_33313[(2)]);
var state_33313__$1 = state_33313;
var statearr_33370_34903 = state_33313__$1;
(statearr_33370_34903[(2)] = inst_33295);

(statearr_33370_34903[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (19))){
var inst_33213 = (state_33313[(7)]);
var inst_33217 = cljs.core.chunk_first(inst_33213);
var inst_33218 = cljs.core.chunk_rest(inst_33213);
var inst_33219 = cljs.core.count(inst_33217);
var inst_33191 = inst_33218;
var inst_33192 = inst_33217;
var inst_33193 = inst_33219;
var inst_33194 = (0);
var state_33313__$1 = (function (){var statearr_33371 = state_33313;
(statearr_33371[(13)] = inst_33192);

(statearr_33371[(14)] = inst_33191);

(statearr_33371[(15)] = inst_33193);

(statearr_33371[(17)] = inst_33194);

return statearr_33371;
})();
var statearr_33372_34907 = state_33313__$1;
(statearr_33372_34907[(2)] = null);

(statearr_33372_34907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (11))){
var inst_33213 = (state_33313[(7)]);
var inst_33191 = (state_33313[(14)]);
var inst_33213__$1 = cljs.core.seq(inst_33191);
var state_33313__$1 = (function (){var statearr_33373 = state_33313;
(statearr_33373[(7)] = inst_33213__$1);

return statearr_33373;
})();
if(inst_33213__$1){
var statearr_33375_34908 = state_33313__$1;
(statearr_33375_34908[(1)] = (16));

} else {
var statearr_33376_34909 = state_33313__$1;
(statearr_33376_34909[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (9))){
var inst_33243 = (state_33313[(2)]);
var state_33313__$1 = state_33313;
var statearr_33377_34910 = state_33313__$1;
(statearr_33377_34910[(2)] = inst_33243);

(statearr_33377_34910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (5))){
var inst_33189 = cljs.core.deref(cs);
var inst_33190 = cljs.core.seq(inst_33189);
var inst_33191 = inst_33190;
var inst_33192 = null;
var inst_33193 = (0);
var inst_33194 = (0);
var state_33313__$1 = (function (){var statearr_33378 = state_33313;
(statearr_33378[(13)] = inst_33192);

(statearr_33378[(14)] = inst_33191);

(statearr_33378[(15)] = inst_33193);

(statearr_33378[(17)] = inst_33194);

return statearr_33378;
})();
var statearr_33379_34911 = state_33313__$1;
(statearr_33379_34911[(2)] = null);

(statearr_33379_34911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (14))){
var state_33313__$1 = state_33313;
var statearr_33380_34912 = state_33313__$1;
(statearr_33380_34912[(2)] = null);

(statearr_33380_34912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (45))){
var inst_33303 = (state_33313[(2)]);
var state_33313__$1 = state_33313;
var statearr_33381_34919 = state_33313__$1;
(statearr_33381_34919[(2)] = inst_33303);

(statearr_33381_34919[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (26))){
var inst_33246 = (state_33313[(27)]);
var inst_33299 = (state_33313[(2)]);
var inst_33300 = cljs.core.seq(inst_33246);
var state_33313__$1 = (function (){var statearr_33382 = state_33313;
(statearr_33382[(29)] = inst_33299);

return statearr_33382;
})();
if(inst_33300){
var statearr_33383_34920 = state_33313__$1;
(statearr_33383_34920[(1)] = (42));

} else {
var statearr_33384_34921 = state_33313__$1;
(statearr_33384_34921[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (16))){
var inst_33213 = (state_33313[(7)]);
var inst_33215 = cljs.core.chunked_seq_QMARK_(inst_33213);
var state_33313__$1 = state_33313;
if(inst_33215){
var statearr_33385_34922 = state_33313__$1;
(statearr_33385_34922[(1)] = (19));

} else {
var statearr_33386_34923 = state_33313__$1;
(statearr_33386_34923[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (38))){
var inst_33292 = (state_33313[(2)]);
var state_33313__$1 = state_33313;
var statearr_33388_34924 = state_33313__$1;
(statearr_33388_34924[(2)] = inst_33292);

(statearr_33388_34924[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (30))){
var state_33313__$1 = state_33313;
var statearr_33389_34925 = state_33313__$1;
(statearr_33389_34925[(2)] = null);

(statearr_33389_34925[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (10))){
var inst_33192 = (state_33313[(13)]);
var inst_33194 = (state_33313[(17)]);
var inst_33202 = cljs.core._nth(inst_33192,inst_33194);
var inst_33203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33202,(0),null);
var inst_33204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33202,(1),null);
var state_33313__$1 = (function (){var statearr_33390 = state_33313;
(statearr_33390[(24)] = inst_33203);

return statearr_33390;
})();
if(cljs.core.truth_(inst_33204)){
var statearr_33391_34926 = state_33313__$1;
(statearr_33391_34926[(1)] = (13));

} else {
var statearr_33392_34927 = state_33313__$1;
(statearr_33392_34927[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (18))){
var inst_33239 = (state_33313[(2)]);
var state_33313__$1 = state_33313;
var statearr_33393_34928 = state_33313__$1;
(statearr_33393_34928[(2)] = inst_33239);

(statearr_33393_34928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (42))){
var state_33313__$1 = state_33313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33313__$1,(45),dchan);
} else {
if((state_val_33314 === (37))){
var inst_33282 = (state_33313[(22)]);
var inst_33273 = (state_33313[(23)]);
var inst_33181 = (state_33313[(12)]);
var inst_33282__$1 = cljs.core.first(inst_33273);
var inst_33283 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33282__$1,inst_33181,done);
var state_33313__$1 = (function (){var statearr_33394 = state_33313;
(statearr_33394[(22)] = inst_33282__$1);

return statearr_33394;
})();
if(cljs.core.truth_(inst_33283)){
var statearr_33395_34929 = state_33313__$1;
(statearr_33395_34929[(1)] = (39));

} else {
var statearr_33396_34930 = state_33313__$1;
(statearr_33396_34930[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33314 === (8))){
var inst_33193 = (state_33313[(15)]);
var inst_33194 = (state_33313[(17)]);
var inst_33196 = (inst_33194 < inst_33193);
var inst_33197 = inst_33196;
var state_33313__$1 = state_33313;
if(cljs.core.truth_(inst_33197)){
var statearr_33397_34937 = state_33313__$1;
(statearr_33397_34937[(1)] = (10));

} else {
var statearr_33398_34938 = state_33313__$1;
(statearr_33398_34938[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32139__auto__ = null;
var cljs$core$async$mult_$_state_machine__32139__auto____0 = (function (){
var statearr_33400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33400[(0)] = cljs$core$async$mult_$_state_machine__32139__auto__);

(statearr_33400[(1)] = (1));

return statearr_33400;
});
var cljs$core$async$mult_$_state_machine__32139__auto____1 = (function (state_33313){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_33313);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e33401){var ex__32142__auto__ = e33401;
var statearr_33402_34939 = state_33313;
(statearr_33402_34939[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_33313[(4)]))){
var statearr_33403_34940 = state_33313;
(statearr_33403_34940[(1)] = cljs.core.first((state_33313[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34941 = state_33313;
state_33313 = G__34941;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32139__auto__ = function(state_33313){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32139__auto____1.call(this,state_33313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32139__auto____0;
cljs$core$async$mult_$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32139__auto____1;
return cljs$core$async$mult_$_state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_33404 = f__32437__auto__();
(statearr_33404[(6)] = c__32436__auto___34838);

return statearr_33404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33406 = arguments.length;
switch (G__33406) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34943 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34943(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34950 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34950(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34951 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34951(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34952 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34952(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34953 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34953(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___34954 = arguments.length;
var i__4830__auto___34955 = (0);
while(true){
if((i__4830__auto___34955 < len__4829__auto___34954)){
args__4835__auto__.push((arguments[i__4830__auto___34955]));

var G__34956 = (i__4830__auto___34955 + (1));
i__4830__auto___34955 = G__34956;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33413){
var map__33414 = p__33413;
var map__33414__$1 = cljs.core.__destructure_map(map__33414);
var opts = map__33414__$1;
var statearr_33415_34957 = state;
(statearr_33415_34957[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33416_34958 = state;
(statearr_33416_34958[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33417_34959 = state;
(statearr_33417_34959[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33409){
var G__33410 = cljs.core.first(seq33409);
var seq33409__$1 = cljs.core.next(seq33409);
var G__33411 = cljs.core.first(seq33409__$1);
var seq33409__$2 = cljs.core.next(seq33409__$1);
var G__33412 = cljs.core.first(seq33409__$2);
var seq33409__$3 = cljs.core.next(seq33409__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33410,G__33411,G__33412,seq33409__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33420 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33420 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33421){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33421 = meta33421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33422,meta33421__$1){
var self__ = this;
var _33422__$1 = this;
return (new cljs.core.async.t_cljs$core$async33420(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33421__$1));
}));

(cljs.core.async.t_cljs$core$async33420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33422){
var self__ = this;
var _33422__$1 = this;
return self__.meta33421;
}));

(cljs.core.async.t_cljs$core$async33420.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33420.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33420.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33420.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33420.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33420.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33420.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33420.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33421","meta33421",-1833738382,null)], null);
}));

(cljs.core.async.t_cljs$core$async33420.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33420");

(cljs.core.async.t_cljs$core$async33420.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async33420");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33420.
 */
cljs.core.async.__GT_t_cljs$core$async33420 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33420(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33421){
return (new cljs.core.async.t_cljs$core$async33420(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33421));
});

}

return (new cljs.core.async.t_cljs$core$async33420(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32436__auto___34971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_33492){
var state_val_33493 = (state_33492[(1)]);
if((state_val_33493 === (7))){
var inst_33452 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
if(cljs.core.truth_(inst_33452)){
var statearr_33494_34973 = state_33492__$1;
(statearr_33494_34973[(1)] = (8));

} else {
var statearr_33495_34974 = state_33492__$1;
(statearr_33495_34974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (20))){
var inst_33445 = (state_33492[(7)]);
var state_33492__$1 = state_33492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33492__$1,(23),out,inst_33445);
} else {
if((state_val_33493 === (1))){
var inst_33427 = calc_state();
var inst_33428 = cljs.core.__destructure_map(inst_33427);
var inst_33429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33428,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33428,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33428,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33432 = inst_33427;
var state_33492__$1 = (function (){var statearr_33497 = state_33492;
(statearr_33497[(8)] = inst_33430);

(statearr_33497[(9)] = inst_33432);

(statearr_33497[(10)] = inst_33429);

(statearr_33497[(11)] = inst_33431);

return statearr_33497;
})();
var statearr_33498_34976 = state_33492__$1;
(statearr_33498_34976[(2)] = null);

(statearr_33498_34976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (24))){
var inst_33435 = (state_33492[(12)]);
var inst_33432 = inst_33435;
var state_33492__$1 = (function (){var statearr_33499 = state_33492;
(statearr_33499[(9)] = inst_33432);

return statearr_33499;
})();
var statearr_33500_34978 = state_33492__$1;
(statearr_33500_34978[(2)] = null);

(statearr_33500_34978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (4))){
var inst_33447 = (state_33492[(13)]);
var inst_33445 = (state_33492[(7)]);
var inst_33444 = (state_33492[(2)]);
var inst_33445__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33444,(0),null);
var inst_33446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33444,(1),null);
var inst_33447__$1 = (inst_33445__$1 == null);
var state_33492__$1 = (function (){var statearr_33501 = state_33492;
(statearr_33501[(14)] = inst_33446);

(statearr_33501[(13)] = inst_33447__$1);

(statearr_33501[(7)] = inst_33445__$1);

return statearr_33501;
})();
if(cljs.core.truth_(inst_33447__$1)){
var statearr_33502_34982 = state_33492__$1;
(statearr_33502_34982[(1)] = (5));

} else {
var statearr_33503_34983 = state_33492__$1;
(statearr_33503_34983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (15))){
var inst_33436 = (state_33492[(15)]);
var inst_33466 = (state_33492[(16)]);
var inst_33466__$1 = cljs.core.empty_QMARK_(inst_33436);
var state_33492__$1 = (function (){var statearr_33504 = state_33492;
(statearr_33504[(16)] = inst_33466__$1);

return statearr_33504;
})();
if(inst_33466__$1){
var statearr_33505_34984 = state_33492__$1;
(statearr_33505_34984[(1)] = (17));

} else {
var statearr_33506_34985 = state_33492__$1;
(statearr_33506_34985[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (21))){
var inst_33435 = (state_33492[(12)]);
var inst_33432 = inst_33435;
var state_33492__$1 = (function (){var statearr_33507 = state_33492;
(statearr_33507[(9)] = inst_33432);

return statearr_33507;
})();
var statearr_33508_34986 = state_33492__$1;
(statearr_33508_34986[(2)] = null);

(statearr_33508_34986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (13))){
var inst_33459 = (state_33492[(2)]);
var inst_33460 = calc_state();
var inst_33432 = inst_33460;
var state_33492__$1 = (function (){var statearr_33510 = state_33492;
(statearr_33510[(17)] = inst_33459);

(statearr_33510[(9)] = inst_33432);

return statearr_33510;
})();
var statearr_33511_34987 = state_33492__$1;
(statearr_33511_34987[(2)] = null);

(statearr_33511_34987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (22))){
var inst_33486 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
var statearr_33512_34989 = state_33492__$1;
(statearr_33512_34989[(2)] = inst_33486);

(statearr_33512_34989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (6))){
var inst_33446 = (state_33492[(14)]);
var inst_33450 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33446,change);
var state_33492__$1 = state_33492;
var statearr_33513_34991 = state_33492__$1;
(statearr_33513_34991[(2)] = inst_33450);

(statearr_33513_34991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (25))){
var state_33492__$1 = state_33492;
var statearr_33514_34992 = state_33492__$1;
(statearr_33514_34992[(2)] = null);

(statearr_33514_34992[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (17))){
var inst_33446 = (state_33492[(14)]);
var inst_33437 = (state_33492[(18)]);
var inst_33468 = (inst_33437.cljs$core$IFn$_invoke$arity$1 ? inst_33437.cljs$core$IFn$_invoke$arity$1(inst_33446) : inst_33437.call(null,inst_33446));
var inst_33469 = cljs.core.not(inst_33468);
var state_33492__$1 = state_33492;
var statearr_33515_34993 = state_33492__$1;
(statearr_33515_34993[(2)] = inst_33469);

(statearr_33515_34993[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (3))){
var inst_33490 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33492__$1,inst_33490);
} else {
if((state_val_33493 === (12))){
var state_33492__$1 = state_33492;
var statearr_33516_34994 = state_33492__$1;
(statearr_33516_34994[(2)] = null);

(statearr_33516_34994[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (2))){
var inst_33432 = (state_33492[(9)]);
var inst_33435 = (state_33492[(12)]);
var inst_33435__$1 = cljs.core.__destructure_map(inst_33432);
var inst_33436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33435__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33435__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33435__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33492__$1 = (function (){var statearr_33518 = state_33492;
(statearr_33518[(15)] = inst_33436);

(statearr_33518[(18)] = inst_33437);

(statearr_33518[(12)] = inst_33435__$1);

return statearr_33518;
})();
return cljs.core.async.ioc_alts_BANG_(state_33492__$1,(4),inst_33438);
} else {
if((state_val_33493 === (23))){
var inst_33477 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
if(cljs.core.truth_(inst_33477)){
var statearr_33519_34995 = state_33492__$1;
(statearr_33519_34995[(1)] = (24));

} else {
var statearr_33520_34996 = state_33492__$1;
(statearr_33520_34996[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (19))){
var inst_33472 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
var statearr_33521_34997 = state_33492__$1;
(statearr_33521_34997[(2)] = inst_33472);

(statearr_33521_34997[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (11))){
var inst_33446 = (state_33492[(14)]);
var inst_33456 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33446);
var state_33492__$1 = state_33492;
var statearr_33522_34998 = state_33492__$1;
(statearr_33522_34998[(2)] = inst_33456);

(statearr_33522_34998[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (9))){
var inst_33436 = (state_33492[(15)]);
var inst_33446 = (state_33492[(14)]);
var inst_33463 = (state_33492[(19)]);
var inst_33463__$1 = (inst_33436.cljs$core$IFn$_invoke$arity$1 ? inst_33436.cljs$core$IFn$_invoke$arity$1(inst_33446) : inst_33436.call(null,inst_33446));
var state_33492__$1 = (function (){var statearr_33523 = state_33492;
(statearr_33523[(19)] = inst_33463__$1);

return statearr_33523;
})();
if(cljs.core.truth_(inst_33463__$1)){
var statearr_33524_34999 = state_33492__$1;
(statearr_33524_34999[(1)] = (14));

} else {
var statearr_33525_35000 = state_33492__$1;
(statearr_33525_35000[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (5))){
var inst_33447 = (state_33492[(13)]);
var state_33492__$1 = state_33492;
var statearr_33526_35001 = state_33492__$1;
(statearr_33526_35001[(2)] = inst_33447);

(statearr_33526_35001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (14))){
var inst_33463 = (state_33492[(19)]);
var state_33492__$1 = state_33492;
var statearr_33528_35002 = state_33492__$1;
(statearr_33528_35002[(2)] = inst_33463);

(statearr_33528_35002[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (26))){
var inst_33482 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
var statearr_33529_35003 = state_33492__$1;
(statearr_33529_35003[(2)] = inst_33482);

(statearr_33529_35003[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (16))){
var inst_33474 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
if(cljs.core.truth_(inst_33474)){
var statearr_33530_35004 = state_33492__$1;
(statearr_33530_35004[(1)] = (20));

} else {
var statearr_33531_35005 = state_33492__$1;
(statearr_33531_35005[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (10))){
var inst_33488 = (state_33492[(2)]);
var state_33492__$1 = state_33492;
var statearr_33532_35007 = state_33492__$1;
(statearr_33532_35007[(2)] = inst_33488);

(statearr_33532_35007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (18))){
var inst_33466 = (state_33492[(16)]);
var state_33492__$1 = state_33492;
var statearr_33533_35009 = state_33492__$1;
(statearr_33533_35009[(2)] = inst_33466);

(statearr_33533_35009[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33493 === (8))){
var inst_33445 = (state_33492[(7)]);
var inst_33454 = (inst_33445 == null);
var state_33492__$1 = state_33492;
if(cljs.core.truth_(inst_33454)){
var statearr_33534_35023 = state_33492__$1;
(statearr_33534_35023[(1)] = (11));

} else {
var statearr_33535_35024 = state_33492__$1;
(statearr_33535_35024[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32139__auto__ = null;
var cljs$core$async$mix_$_state_machine__32139__auto____0 = (function (){
var statearr_33536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33536[(0)] = cljs$core$async$mix_$_state_machine__32139__auto__);

(statearr_33536[(1)] = (1));

return statearr_33536;
});
var cljs$core$async$mix_$_state_machine__32139__auto____1 = (function (state_33492){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_33492);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e33537){var ex__32142__auto__ = e33537;
var statearr_33538_35035 = state_33492;
(statearr_33538_35035[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_33492[(4)]))){
var statearr_33540_35036 = state_33492;
(statearr_33540_35036[(1)] = cljs.core.first((state_33492[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35037 = state_33492;
state_33492 = G__35037;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32139__auto__ = function(state_33492){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32139__auto____1.call(this,state_33492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32139__auto____0;
cljs$core$async$mix_$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32139__auto____1;
return cljs$core$async$mix_$_state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_33541 = f__32437__auto__();
(statearr_33541[(6)] = c__32436__auto___34971);

return statearr_33541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35046 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35046(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35059 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35059(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35064 = (function() {
var G__35065 = null;
var G__35065__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35065__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35065 = function(p,v){
switch(arguments.length){
case 1:
return G__35065__1.call(this,p);
case 2:
return G__35065__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35065.cljs$core$IFn$_invoke$arity$1 = G__35065__1;
G__35065.cljs$core$IFn$_invoke$arity$2 = G__35065__2;
return G__35065;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33544 = arguments.length;
switch (G__33544) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35064(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35064(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33548 = arguments.length;
switch (G__33548) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33545_SHARP_){
if(cljs.core.truth_((p1__33545_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33545_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33545_SHARP_.call(null,topic)))){
return p1__33545_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33545_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33549 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33550){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33550 = meta33550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33551,meta33550__$1){
var self__ = this;
var _33551__$1 = this;
return (new cljs.core.async.t_cljs$core$async33549(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33550__$1));
}));

(cljs.core.async.t_cljs$core$async33549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33551){
var self__ = this;
var _33551__$1 = this;
return self__.meta33550;
}));

(cljs.core.async.t_cljs$core$async33549.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33549.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33549.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33549.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33549.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33549.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33549.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33550","meta33550",1186884477,null)], null);
}));

(cljs.core.async.t_cljs$core$async33549.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33549");

(cljs.core.async.t_cljs$core$async33549.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async33549");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33549.
 */
cljs.core.async.__GT_t_cljs$core$async33549 = (function cljs$core$async$__GT_t_cljs$core$async33549(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33550){
return (new cljs.core.async.t_cljs$core$async33549(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33550));
});

}

return (new cljs.core.async.t_cljs$core$async33549(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32436__auto___35092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_33626){
var state_val_33627 = (state_33626[(1)]);
if((state_val_33627 === (7))){
var inst_33622 = (state_33626[(2)]);
var state_33626__$1 = state_33626;
var statearr_33629_35093 = state_33626__$1;
(statearr_33629_35093[(2)] = inst_33622);

(statearr_33629_35093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (20))){
var state_33626__$1 = state_33626;
var statearr_33630_35094 = state_33626__$1;
(statearr_33630_35094[(2)] = null);

(statearr_33630_35094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (1))){
var state_33626__$1 = state_33626;
var statearr_33631_35095 = state_33626__$1;
(statearr_33631_35095[(2)] = null);

(statearr_33631_35095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (24))){
var inst_33605 = (state_33626[(7)]);
var inst_33614 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33605);
var state_33626__$1 = state_33626;
var statearr_33632_35096 = state_33626__$1;
(statearr_33632_35096[(2)] = inst_33614);

(statearr_33632_35096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (4))){
var inst_33556 = (state_33626[(8)]);
var inst_33556__$1 = (state_33626[(2)]);
var inst_33557 = (inst_33556__$1 == null);
var state_33626__$1 = (function (){var statearr_33633 = state_33626;
(statearr_33633[(8)] = inst_33556__$1);

return statearr_33633;
})();
if(cljs.core.truth_(inst_33557)){
var statearr_33634_35097 = state_33626__$1;
(statearr_33634_35097[(1)] = (5));

} else {
var statearr_33635_35098 = state_33626__$1;
(statearr_33635_35098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (15))){
var inst_33599 = (state_33626[(2)]);
var state_33626__$1 = state_33626;
var statearr_33636_35099 = state_33626__$1;
(statearr_33636_35099[(2)] = inst_33599);

(statearr_33636_35099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (21))){
var inst_33619 = (state_33626[(2)]);
var state_33626__$1 = (function (){var statearr_33637 = state_33626;
(statearr_33637[(9)] = inst_33619);

return statearr_33637;
})();
var statearr_33638_35100 = state_33626__$1;
(statearr_33638_35100[(2)] = null);

(statearr_33638_35100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (13))){
var inst_33581 = (state_33626[(10)]);
var inst_33583 = cljs.core.chunked_seq_QMARK_(inst_33581);
var state_33626__$1 = state_33626;
if(inst_33583){
var statearr_33640_35101 = state_33626__$1;
(statearr_33640_35101[(1)] = (16));

} else {
var statearr_33641_35102 = state_33626__$1;
(statearr_33641_35102[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (22))){
var inst_33611 = (state_33626[(2)]);
var state_33626__$1 = state_33626;
if(cljs.core.truth_(inst_33611)){
var statearr_33642_35103 = state_33626__$1;
(statearr_33642_35103[(1)] = (23));

} else {
var statearr_33643_35104 = state_33626__$1;
(statearr_33643_35104[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (6))){
var inst_33605 = (state_33626[(7)]);
var inst_33556 = (state_33626[(8)]);
var inst_33607 = (state_33626[(11)]);
var inst_33605__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33556) : topic_fn.call(null,inst_33556));
var inst_33606 = cljs.core.deref(mults);
var inst_33607__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33606,inst_33605__$1);
var state_33626__$1 = (function (){var statearr_33644 = state_33626;
(statearr_33644[(7)] = inst_33605__$1);

(statearr_33644[(11)] = inst_33607__$1);

return statearr_33644;
})();
if(cljs.core.truth_(inst_33607__$1)){
var statearr_33645_35105 = state_33626__$1;
(statearr_33645_35105[(1)] = (19));

} else {
var statearr_33646_35106 = state_33626__$1;
(statearr_33646_35106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (25))){
var inst_33616 = (state_33626[(2)]);
var state_33626__$1 = state_33626;
var statearr_33647_35107 = state_33626__$1;
(statearr_33647_35107[(2)] = inst_33616);

(statearr_33647_35107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (17))){
var inst_33581 = (state_33626[(10)]);
var inst_33590 = cljs.core.first(inst_33581);
var inst_33591 = cljs.core.async.muxch_STAR_(inst_33590);
var inst_33592 = cljs.core.async.close_BANG_(inst_33591);
var inst_33593 = cljs.core.next(inst_33581);
var inst_33566 = inst_33593;
var inst_33567 = null;
var inst_33568 = (0);
var inst_33569 = (0);
var state_33626__$1 = (function (){var statearr_33648 = state_33626;
(statearr_33648[(12)] = inst_33569);

(statearr_33648[(13)] = inst_33592);

(statearr_33648[(14)] = inst_33567);

(statearr_33648[(15)] = inst_33566);

(statearr_33648[(16)] = inst_33568);

return statearr_33648;
})();
var statearr_33650_35112 = state_33626__$1;
(statearr_33650_35112[(2)] = null);

(statearr_33650_35112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (3))){
var inst_33624 = (state_33626[(2)]);
var state_33626__$1 = state_33626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33626__$1,inst_33624);
} else {
if((state_val_33627 === (12))){
var inst_33601 = (state_33626[(2)]);
var state_33626__$1 = state_33626;
var statearr_33651_35113 = state_33626__$1;
(statearr_33651_35113[(2)] = inst_33601);

(statearr_33651_35113[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (2))){
var state_33626__$1 = state_33626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33626__$1,(4),ch);
} else {
if((state_val_33627 === (23))){
var state_33626__$1 = state_33626;
var statearr_33652_35114 = state_33626__$1;
(statearr_33652_35114[(2)] = null);

(statearr_33652_35114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (19))){
var inst_33556 = (state_33626[(8)]);
var inst_33607 = (state_33626[(11)]);
var inst_33609 = cljs.core.async.muxch_STAR_(inst_33607);
var state_33626__$1 = state_33626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33626__$1,(22),inst_33609,inst_33556);
} else {
if((state_val_33627 === (11))){
var inst_33581 = (state_33626[(10)]);
var inst_33566 = (state_33626[(15)]);
var inst_33581__$1 = cljs.core.seq(inst_33566);
var state_33626__$1 = (function (){var statearr_33653 = state_33626;
(statearr_33653[(10)] = inst_33581__$1);

return statearr_33653;
})();
if(inst_33581__$1){
var statearr_33654_35115 = state_33626__$1;
(statearr_33654_35115[(1)] = (13));

} else {
var statearr_33655_35116 = state_33626__$1;
(statearr_33655_35116[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (9))){
var inst_33603 = (state_33626[(2)]);
var state_33626__$1 = state_33626;
var statearr_33656_35117 = state_33626__$1;
(statearr_33656_35117[(2)] = inst_33603);

(statearr_33656_35117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (5))){
var inst_33563 = cljs.core.deref(mults);
var inst_33564 = cljs.core.vals(inst_33563);
var inst_33565 = cljs.core.seq(inst_33564);
var inst_33566 = inst_33565;
var inst_33567 = null;
var inst_33568 = (0);
var inst_33569 = (0);
var state_33626__$1 = (function (){var statearr_33657 = state_33626;
(statearr_33657[(12)] = inst_33569);

(statearr_33657[(14)] = inst_33567);

(statearr_33657[(15)] = inst_33566);

(statearr_33657[(16)] = inst_33568);

return statearr_33657;
})();
var statearr_33659_35122 = state_33626__$1;
(statearr_33659_35122[(2)] = null);

(statearr_33659_35122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (14))){
var state_33626__$1 = state_33626;
var statearr_33663_35123 = state_33626__$1;
(statearr_33663_35123[(2)] = null);

(statearr_33663_35123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (16))){
var inst_33581 = (state_33626[(10)]);
var inst_33585 = cljs.core.chunk_first(inst_33581);
var inst_33586 = cljs.core.chunk_rest(inst_33581);
var inst_33587 = cljs.core.count(inst_33585);
var inst_33566 = inst_33586;
var inst_33567 = inst_33585;
var inst_33568 = inst_33587;
var inst_33569 = (0);
var state_33626__$1 = (function (){var statearr_33664 = state_33626;
(statearr_33664[(12)] = inst_33569);

(statearr_33664[(14)] = inst_33567);

(statearr_33664[(15)] = inst_33566);

(statearr_33664[(16)] = inst_33568);

return statearr_33664;
})();
var statearr_33665_35125 = state_33626__$1;
(statearr_33665_35125[(2)] = null);

(statearr_33665_35125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (10))){
var inst_33569 = (state_33626[(12)]);
var inst_33567 = (state_33626[(14)]);
var inst_33566 = (state_33626[(15)]);
var inst_33568 = (state_33626[(16)]);
var inst_33575 = cljs.core._nth(inst_33567,inst_33569);
var inst_33576 = cljs.core.async.muxch_STAR_(inst_33575);
var inst_33577 = cljs.core.async.close_BANG_(inst_33576);
var inst_33578 = (inst_33569 + (1));
var tmp33660 = inst_33567;
var tmp33661 = inst_33566;
var tmp33662 = inst_33568;
var inst_33566__$1 = tmp33661;
var inst_33567__$1 = tmp33660;
var inst_33568__$1 = tmp33662;
var inst_33569__$1 = inst_33578;
var state_33626__$1 = (function (){var statearr_33666 = state_33626;
(statearr_33666[(12)] = inst_33569__$1);

(statearr_33666[(17)] = inst_33577);

(statearr_33666[(14)] = inst_33567__$1);

(statearr_33666[(15)] = inst_33566__$1);

(statearr_33666[(16)] = inst_33568__$1);

return statearr_33666;
})();
var statearr_33667_35126 = state_33626__$1;
(statearr_33667_35126[(2)] = null);

(statearr_33667_35126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (18))){
var inst_33596 = (state_33626[(2)]);
var state_33626__$1 = state_33626;
var statearr_33668_35128 = state_33626__$1;
(statearr_33668_35128[(2)] = inst_33596);

(statearr_33668_35128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33627 === (8))){
var inst_33569 = (state_33626[(12)]);
var inst_33568 = (state_33626[(16)]);
var inst_33572 = (inst_33569 < inst_33568);
var inst_33573 = inst_33572;
var state_33626__$1 = state_33626;
if(cljs.core.truth_(inst_33573)){
var statearr_33669_35129 = state_33626__$1;
(statearr_33669_35129[(1)] = (10));

} else {
var statearr_33670_35130 = state_33626__$1;
(statearr_33670_35130[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32139__auto__ = null;
var cljs$core$async$state_machine__32139__auto____0 = (function (){
var statearr_33672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33672[(0)] = cljs$core$async$state_machine__32139__auto__);

(statearr_33672[(1)] = (1));

return statearr_33672;
});
var cljs$core$async$state_machine__32139__auto____1 = (function (state_33626){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_33626);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e33673){var ex__32142__auto__ = e33673;
var statearr_33674_35135 = state_33626;
(statearr_33674_35135[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_33626[(4)]))){
var statearr_33675_35136 = state_33626;
(statearr_33675_35136[(1)] = cljs.core.first((state_33626[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35137 = state_33626;
state_33626 = G__35137;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$state_machine__32139__auto__ = function(state_33626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32139__auto____1.call(this,state_33626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32139__auto____0;
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32139__auto____1;
return cljs$core$async$state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_33676 = f__32437__auto__();
(statearr_33676[(6)] = c__32436__auto___35092);

return statearr_33676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33678 = arguments.length;
switch (G__33678) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33680 = arguments.length;
switch (G__33680) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33682 = arguments.length;
switch (G__33682) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32436__auto___35141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_33727){
var state_val_33728 = (state_33727[(1)]);
if((state_val_33728 === (7))){
var state_33727__$1 = state_33727;
var statearr_33729_35142 = state_33727__$1;
(statearr_33729_35142[(2)] = null);

(statearr_33729_35142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (1))){
var state_33727__$1 = state_33727;
var statearr_33730_35143 = state_33727__$1;
(statearr_33730_35143[(2)] = null);

(statearr_33730_35143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (4))){
var inst_33687 = (state_33727[(7)]);
var inst_33686 = (state_33727[(8)]);
var inst_33689 = (inst_33687 < inst_33686);
var state_33727__$1 = state_33727;
if(cljs.core.truth_(inst_33689)){
var statearr_33731_35144 = state_33727__$1;
(statearr_33731_35144[(1)] = (6));

} else {
var statearr_33732_35145 = state_33727__$1;
(statearr_33732_35145[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (15))){
var inst_33713 = (state_33727[(9)]);
var inst_33718 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33713);
var state_33727__$1 = state_33727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33727__$1,(17),out,inst_33718);
} else {
if((state_val_33728 === (13))){
var inst_33713 = (state_33727[(9)]);
var inst_33713__$1 = (state_33727[(2)]);
var inst_33714 = cljs.core.some(cljs.core.nil_QMARK_,inst_33713__$1);
var state_33727__$1 = (function (){var statearr_33734 = state_33727;
(statearr_33734[(9)] = inst_33713__$1);

return statearr_33734;
})();
if(cljs.core.truth_(inst_33714)){
var statearr_33735_35146 = state_33727__$1;
(statearr_33735_35146[(1)] = (14));

} else {
var statearr_33736_35147 = state_33727__$1;
(statearr_33736_35147[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (6))){
var state_33727__$1 = state_33727;
var statearr_33737_35149 = state_33727__$1;
(statearr_33737_35149[(2)] = null);

(statearr_33737_35149[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (17))){
var inst_33720 = (state_33727[(2)]);
var state_33727__$1 = (function (){var statearr_33740 = state_33727;
(statearr_33740[(10)] = inst_33720);

return statearr_33740;
})();
var statearr_33741_35150 = state_33727__$1;
(statearr_33741_35150[(2)] = null);

(statearr_33741_35150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (3))){
var inst_33725 = (state_33727[(2)]);
var state_33727__$1 = state_33727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33727__$1,inst_33725);
} else {
if((state_val_33728 === (12))){
var _ = (function (){var statearr_33742 = state_33727;
(statearr_33742[(4)] = cljs.core.rest((state_33727[(4)])));

return statearr_33742;
})();
var state_33727__$1 = state_33727;
var ex33738 = (state_33727__$1[(2)]);
var statearr_33743_35154 = state_33727__$1;
(statearr_33743_35154[(5)] = ex33738);


if((ex33738 instanceof Object)){
var statearr_33744_35155 = state_33727__$1;
(statearr_33744_35155[(1)] = (11));

(statearr_33744_35155[(5)] = null);

} else {
throw ex33738;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (2))){
var inst_33685 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33686 = cnt;
var inst_33687 = (0);
var state_33727__$1 = (function (){var statearr_33745 = state_33727;
(statearr_33745[(7)] = inst_33687);

(statearr_33745[(11)] = inst_33685);

(statearr_33745[(8)] = inst_33686);

return statearr_33745;
})();
var statearr_33746_35156 = state_33727__$1;
(statearr_33746_35156[(2)] = null);

(statearr_33746_35156[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (11))){
var inst_33691 = (state_33727[(2)]);
var inst_33692 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33727__$1 = (function (){var statearr_33747 = state_33727;
(statearr_33747[(12)] = inst_33691);

return statearr_33747;
})();
var statearr_33748_35157 = state_33727__$1;
(statearr_33748_35157[(2)] = inst_33692);

(statearr_33748_35157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (9))){
var inst_33687 = (state_33727[(7)]);
var _ = (function (){var statearr_33750 = state_33727;
(statearr_33750[(4)] = cljs.core.cons((12),(state_33727[(4)])));

return statearr_33750;
})();
var inst_33699 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33687) : chs__$1.call(null,inst_33687));
var inst_33700 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33687) : done.call(null,inst_33687));
var inst_33701 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33699,inst_33700);
var ___$1 = (function (){var statearr_33751 = state_33727;
(statearr_33751[(4)] = cljs.core.rest((state_33727[(4)])));

return statearr_33751;
})();
var state_33727__$1 = state_33727;
var statearr_33752_35158 = state_33727__$1;
(statearr_33752_35158[(2)] = inst_33701);

(statearr_33752_35158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (5))){
var inst_33711 = (state_33727[(2)]);
var state_33727__$1 = (function (){var statearr_33753 = state_33727;
(statearr_33753[(13)] = inst_33711);

return statearr_33753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33727__$1,(13),dchan);
} else {
if((state_val_33728 === (14))){
var inst_33716 = cljs.core.async.close_BANG_(out);
var state_33727__$1 = state_33727;
var statearr_33754_35159 = state_33727__$1;
(statearr_33754_35159[(2)] = inst_33716);

(statearr_33754_35159[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (16))){
var inst_33723 = (state_33727[(2)]);
var state_33727__$1 = state_33727;
var statearr_33755_35160 = state_33727__$1;
(statearr_33755_35160[(2)] = inst_33723);

(statearr_33755_35160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (10))){
var inst_33687 = (state_33727[(7)]);
var inst_33704 = (state_33727[(2)]);
var inst_33705 = (inst_33687 + (1));
var inst_33687__$1 = inst_33705;
var state_33727__$1 = (function (){var statearr_33756 = state_33727;
(statearr_33756[(7)] = inst_33687__$1);

(statearr_33756[(14)] = inst_33704);

return statearr_33756;
})();
var statearr_33757_35161 = state_33727__$1;
(statearr_33757_35161[(2)] = null);

(statearr_33757_35161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (8))){
var inst_33709 = (state_33727[(2)]);
var state_33727__$1 = state_33727;
var statearr_33758_35163 = state_33727__$1;
(statearr_33758_35163[(2)] = inst_33709);

(statearr_33758_35163[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32139__auto__ = null;
var cljs$core$async$state_machine__32139__auto____0 = (function (){
var statearr_33760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33760[(0)] = cljs$core$async$state_machine__32139__auto__);

(statearr_33760[(1)] = (1));

return statearr_33760;
});
var cljs$core$async$state_machine__32139__auto____1 = (function (state_33727){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_33727);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e33761){var ex__32142__auto__ = e33761;
var statearr_33762_35164 = state_33727;
(statearr_33762_35164[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_33727[(4)]))){
var statearr_33763_35165 = state_33727;
(statearr_33763_35165[(1)] = cljs.core.first((state_33727[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35166 = state_33727;
state_33727 = G__35166;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$state_machine__32139__auto__ = function(state_33727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32139__auto____1.call(this,state_33727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32139__auto____0;
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32139__auto____1;
return cljs$core$async$state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_33764 = f__32437__auto__();
(statearr_33764[(6)] = c__32436__auto___35141);

return statearr_33764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33769 = arguments.length;
switch (G__33769) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32436__auto___35168 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_33803){
var state_val_33804 = (state_33803[(1)]);
if((state_val_33804 === (7))){
var inst_33780 = (state_33803[(7)]);
var inst_33781 = (state_33803[(8)]);
var inst_33780__$1 = (state_33803[(2)]);
var inst_33781__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33780__$1,(0),null);
var inst_33782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33780__$1,(1),null);
var inst_33783 = (inst_33781__$1 == null);
var state_33803__$1 = (function (){var statearr_33805 = state_33803;
(statearr_33805[(9)] = inst_33782);

(statearr_33805[(7)] = inst_33780__$1);

(statearr_33805[(8)] = inst_33781__$1);

return statearr_33805;
})();
if(cljs.core.truth_(inst_33783)){
var statearr_33806_35173 = state_33803__$1;
(statearr_33806_35173[(1)] = (8));

} else {
var statearr_33807_35174 = state_33803__$1;
(statearr_33807_35174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33804 === (1))){
var inst_33770 = cljs.core.vec(chs);
var inst_33771 = inst_33770;
var state_33803__$1 = (function (){var statearr_33808 = state_33803;
(statearr_33808[(10)] = inst_33771);

return statearr_33808;
})();
var statearr_33809_35175 = state_33803__$1;
(statearr_33809_35175[(2)] = null);

(statearr_33809_35175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33804 === (4))){
var inst_33771 = (state_33803[(10)]);
var state_33803__$1 = state_33803;
return cljs.core.async.ioc_alts_BANG_(state_33803__$1,(7),inst_33771);
} else {
if((state_val_33804 === (6))){
var inst_33799 = (state_33803[(2)]);
var state_33803__$1 = state_33803;
var statearr_33810_35177 = state_33803__$1;
(statearr_33810_35177[(2)] = inst_33799);

(statearr_33810_35177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33804 === (3))){
var inst_33801 = (state_33803[(2)]);
var state_33803__$1 = state_33803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33803__$1,inst_33801);
} else {
if((state_val_33804 === (2))){
var inst_33771 = (state_33803[(10)]);
var inst_33773 = cljs.core.count(inst_33771);
var inst_33774 = (inst_33773 > (0));
var state_33803__$1 = state_33803;
if(cljs.core.truth_(inst_33774)){
var statearr_33812_35178 = state_33803__$1;
(statearr_33812_35178[(1)] = (4));

} else {
var statearr_33813_35179 = state_33803__$1;
(statearr_33813_35179[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33804 === (11))){
var inst_33771 = (state_33803[(10)]);
var inst_33792 = (state_33803[(2)]);
var tmp33811 = inst_33771;
var inst_33771__$1 = tmp33811;
var state_33803__$1 = (function (){var statearr_33814 = state_33803;
(statearr_33814[(11)] = inst_33792);

(statearr_33814[(10)] = inst_33771__$1);

return statearr_33814;
})();
var statearr_33815_35180 = state_33803__$1;
(statearr_33815_35180[(2)] = null);

(statearr_33815_35180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33804 === (9))){
var inst_33781 = (state_33803[(8)]);
var state_33803__$1 = state_33803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33803__$1,(11),out,inst_33781);
} else {
if((state_val_33804 === (5))){
var inst_33797 = cljs.core.async.close_BANG_(out);
var state_33803__$1 = state_33803;
var statearr_33818_35182 = state_33803__$1;
(statearr_33818_35182[(2)] = inst_33797);

(statearr_33818_35182[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33804 === (10))){
var inst_33795 = (state_33803[(2)]);
var state_33803__$1 = state_33803;
var statearr_33819_35183 = state_33803__$1;
(statearr_33819_35183[(2)] = inst_33795);

(statearr_33819_35183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33804 === (8))){
var inst_33782 = (state_33803[(9)]);
var inst_33780 = (state_33803[(7)]);
var inst_33781 = (state_33803[(8)]);
var inst_33771 = (state_33803[(10)]);
var inst_33787 = (function (){var cs = inst_33771;
var vec__33776 = inst_33780;
var v = inst_33781;
var c = inst_33782;
return (function (p1__33767_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33767_SHARP_);
});
})();
var inst_33788 = cljs.core.filterv(inst_33787,inst_33771);
var inst_33771__$1 = inst_33788;
var state_33803__$1 = (function (){var statearr_33820 = state_33803;
(statearr_33820[(10)] = inst_33771__$1);

return statearr_33820;
})();
var statearr_33821_35188 = state_33803__$1;
(statearr_33821_35188[(2)] = null);

(statearr_33821_35188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32139__auto__ = null;
var cljs$core$async$state_machine__32139__auto____0 = (function (){
var statearr_33822 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33822[(0)] = cljs$core$async$state_machine__32139__auto__);

(statearr_33822[(1)] = (1));

return statearr_33822;
});
var cljs$core$async$state_machine__32139__auto____1 = (function (state_33803){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_33803);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e33823){var ex__32142__auto__ = e33823;
var statearr_33824_35189 = state_33803;
(statearr_33824_35189[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_33803[(4)]))){
var statearr_33825_35190 = state_33803;
(statearr_33825_35190[(1)] = cljs.core.first((state_33803[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35191 = state_33803;
state_33803 = G__35191;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$state_machine__32139__auto__ = function(state_33803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32139__auto____1.call(this,state_33803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32139__auto____0;
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32139__auto____1;
return cljs$core$async$state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_33826 = f__32437__auto__();
(statearr_33826[(6)] = c__32436__auto___35168);

return statearr_33826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33828 = arguments.length;
switch (G__33828) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32436__auto___35201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_33853){
var state_val_33854 = (state_33853[(1)]);
if((state_val_33854 === (7))){
var inst_33834 = (state_33853[(7)]);
var inst_33834__$1 = (state_33853[(2)]);
var inst_33835 = (inst_33834__$1 == null);
var inst_33836 = cljs.core.not(inst_33835);
var state_33853__$1 = (function (){var statearr_33857 = state_33853;
(statearr_33857[(7)] = inst_33834__$1);

return statearr_33857;
})();
if(inst_33836){
var statearr_33860_35205 = state_33853__$1;
(statearr_33860_35205[(1)] = (8));

} else {
var statearr_33862_35206 = state_33853__$1;
(statearr_33862_35206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33854 === (1))){
var inst_33829 = (0);
var state_33853__$1 = (function (){var statearr_33863 = state_33853;
(statearr_33863[(8)] = inst_33829);

return statearr_33863;
})();
var statearr_33864_35207 = state_33853__$1;
(statearr_33864_35207[(2)] = null);

(statearr_33864_35207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33854 === (4))){
var state_33853__$1 = state_33853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33853__$1,(7),ch);
} else {
if((state_val_33854 === (6))){
var inst_33847 = (state_33853[(2)]);
var state_33853__$1 = state_33853;
var statearr_33868_35208 = state_33853__$1;
(statearr_33868_35208[(2)] = inst_33847);

(statearr_33868_35208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33854 === (3))){
var inst_33849 = (state_33853[(2)]);
var inst_33850 = cljs.core.async.close_BANG_(out);
var state_33853__$1 = (function (){var statearr_33869 = state_33853;
(statearr_33869[(9)] = inst_33849);

return statearr_33869;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33853__$1,inst_33850);
} else {
if((state_val_33854 === (2))){
var inst_33829 = (state_33853[(8)]);
var inst_33831 = (inst_33829 < n);
var state_33853__$1 = state_33853;
if(cljs.core.truth_(inst_33831)){
var statearr_33870_35209 = state_33853__$1;
(statearr_33870_35209[(1)] = (4));

} else {
var statearr_33871_35210 = state_33853__$1;
(statearr_33871_35210[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33854 === (11))){
var inst_33829 = (state_33853[(8)]);
var inst_33839 = (state_33853[(2)]);
var inst_33840 = (inst_33829 + (1));
var inst_33829__$1 = inst_33840;
var state_33853__$1 = (function (){var statearr_33872 = state_33853;
(statearr_33872[(10)] = inst_33839);

(statearr_33872[(8)] = inst_33829__$1);

return statearr_33872;
})();
var statearr_33874_35211 = state_33853__$1;
(statearr_33874_35211[(2)] = null);

(statearr_33874_35211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33854 === (9))){
var state_33853__$1 = state_33853;
var statearr_33875_35212 = state_33853__$1;
(statearr_33875_35212[(2)] = null);

(statearr_33875_35212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33854 === (5))){
var state_33853__$1 = state_33853;
var statearr_33879_35213 = state_33853__$1;
(statearr_33879_35213[(2)] = null);

(statearr_33879_35213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33854 === (10))){
var inst_33844 = (state_33853[(2)]);
var state_33853__$1 = state_33853;
var statearr_33880_35214 = state_33853__$1;
(statearr_33880_35214[(2)] = inst_33844);

(statearr_33880_35214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33854 === (8))){
var inst_33834 = (state_33853[(7)]);
var state_33853__$1 = state_33853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33853__$1,(11),out,inst_33834);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32139__auto__ = null;
var cljs$core$async$state_machine__32139__auto____0 = (function (){
var statearr_33884 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33884[(0)] = cljs$core$async$state_machine__32139__auto__);

(statearr_33884[(1)] = (1));

return statearr_33884;
});
var cljs$core$async$state_machine__32139__auto____1 = (function (state_33853){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_33853);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e33886){var ex__32142__auto__ = e33886;
var statearr_33887_35216 = state_33853;
(statearr_33887_35216[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_33853[(4)]))){
var statearr_33888_35220 = state_33853;
(statearr_33888_35220[(1)] = cljs.core.first((state_33853[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35221 = state_33853;
state_33853 = G__35221;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$state_machine__32139__auto__ = function(state_33853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32139__auto____1.call(this,state_33853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32139__auto____0;
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32139__auto____1;
return cljs$core$async$state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_33892 = f__32437__auto__();
(statearr_33892[(6)] = c__32436__auto___35201);

return statearr_33892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33899 = (function (f,ch,meta33900){
this.f = f;
this.ch = ch;
this.meta33900 = meta33900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33901,meta33900__$1){
var self__ = this;
var _33901__$1 = this;
return (new cljs.core.async.t_cljs$core$async33899(self__.f,self__.ch,meta33900__$1));
}));

(cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33901){
var self__ = this;
var _33901__$1 = this;
return self__.meta33900;
}));

(cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33911 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33911 = (function (f,ch,meta33900,_,fn1,meta33912){
this.f = f;
this.ch = ch;
this.meta33900 = meta33900;
this._ = _;
this.fn1 = fn1;
this.meta33912 = meta33912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33913,meta33912__$1){
var self__ = this;
var _33913__$1 = this;
return (new cljs.core.async.t_cljs$core$async33911(self__.f,self__.ch,self__.meta33900,self__._,self__.fn1,meta33912__$1));
}));

(cljs.core.async.t_cljs$core$async33911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33913){
var self__ = this;
var _33913__$1 = this;
return self__.meta33912;
}));

(cljs.core.async.t_cljs$core$async33911.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33911.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33911.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33911.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33895_SHARP_){
var G__33921 = (((p1__33895_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33895_SHARP_) : self__.f.call(null,p1__33895_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33921) : f1.call(null,G__33921));
});
}));

(cljs.core.async.t_cljs$core$async33911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33900","meta33900",-194241833,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33899","cljs.core.async/t_cljs$core$async33899",-1792044038,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33912","meta33912",780797330,null)], null);
}));

(cljs.core.async.t_cljs$core$async33911.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33911");

(cljs.core.async.t_cljs$core$async33911.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async33911");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33911.
 */
cljs.core.async.__GT_t_cljs$core$async33911 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33911(f__$1,ch__$1,meta33900__$1,___$2,fn1__$1,meta33912){
return (new cljs.core.async.t_cljs$core$async33911(f__$1,ch__$1,meta33900__$1,___$2,fn1__$1,meta33912));
});

}

return (new cljs.core.async.t_cljs$core$async33911(self__.f,self__.ch,self__.meta33900,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33966 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33966) : self__.f.call(null,G__33966));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33900","meta33900",-194241833,null)], null);
}));

(cljs.core.async.t_cljs$core$async33899.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33899");

(cljs.core.async.t_cljs$core$async33899.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async33899");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33899.
 */
cljs.core.async.__GT_t_cljs$core$async33899 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33899(f__$1,ch__$1,meta33900){
return (new cljs.core.async.t_cljs$core$async33899(f__$1,ch__$1,meta33900));
});

}

return (new cljs.core.async.t_cljs$core$async33899(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33988 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33988 = (function (f,ch,meta33989){
this.f = f;
this.ch = ch;
this.meta33989 = meta33989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33990,meta33989__$1){
var self__ = this;
var _33990__$1 = this;
return (new cljs.core.async.t_cljs$core$async33988(self__.f,self__.ch,meta33989__$1));
}));

(cljs.core.async.t_cljs$core$async33988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33990){
var self__ = this;
var _33990__$1 = this;
return self__.meta33989;
}));

(cljs.core.async.t_cljs$core$async33988.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33988.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33988.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33988.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33988.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33988.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33988.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33989","meta33989",-174389502,null)], null);
}));

(cljs.core.async.t_cljs$core$async33988.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33988");

(cljs.core.async.t_cljs$core$async33988.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async33988");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33988.
 */
cljs.core.async.__GT_t_cljs$core$async33988 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33988(f__$1,ch__$1,meta33989){
return (new cljs.core.async.t_cljs$core$async33988(f__$1,ch__$1,meta33989));
});

}

return (new cljs.core.async.t_cljs$core$async33988(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34008 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34008 = (function (p,ch,meta34009){
this.p = p;
this.ch = ch;
this.meta34009 = meta34009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34010,meta34009__$1){
var self__ = this;
var _34010__$1 = this;
return (new cljs.core.async.t_cljs$core$async34008(self__.p,self__.ch,meta34009__$1));
}));

(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34010){
var self__ = this;
var _34010__$1 = this;
return self__.meta34009;
}));

(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34008.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34009","meta34009",-6026221,null)], null);
}));

(cljs.core.async.t_cljs$core$async34008.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34008");

(cljs.core.async.t_cljs$core$async34008.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async34008");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34008.
 */
cljs.core.async.__GT_t_cljs$core$async34008 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34008(p__$1,ch__$1,meta34009){
return (new cljs.core.async.t_cljs$core$async34008(p__$1,ch__$1,meta34009));
});

}

return (new cljs.core.async.t_cljs$core$async34008(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34034 = arguments.length;
switch (G__34034) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32436__auto___35228 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_34065){
var state_val_34067 = (state_34065[(1)]);
if((state_val_34067 === (7))){
var inst_34061 = (state_34065[(2)]);
var state_34065__$1 = state_34065;
var statearr_34071_35233 = state_34065__$1;
(statearr_34071_35233[(2)] = inst_34061);

(statearr_34071_35233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (1))){
var state_34065__$1 = state_34065;
var statearr_34075_35234 = state_34065__$1;
(statearr_34075_35234[(2)] = null);

(statearr_34075_35234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (4))){
var inst_34046 = (state_34065[(7)]);
var inst_34046__$1 = (state_34065[(2)]);
var inst_34047 = (inst_34046__$1 == null);
var state_34065__$1 = (function (){var statearr_34077 = state_34065;
(statearr_34077[(7)] = inst_34046__$1);

return statearr_34077;
})();
if(cljs.core.truth_(inst_34047)){
var statearr_34078_35236 = state_34065__$1;
(statearr_34078_35236[(1)] = (5));

} else {
var statearr_34079_35237 = state_34065__$1;
(statearr_34079_35237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (6))){
var inst_34046 = (state_34065[(7)]);
var inst_34052 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34046) : p.call(null,inst_34046));
var state_34065__$1 = state_34065;
if(cljs.core.truth_(inst_34052)){
var statearr_34083_35240 = state_34065__$1;
(statearr_34083_35240[(1)] = (8));

} else {
var statearr_34084_35242 = state_34065__$1;
(statearr_34084_35242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (3))){
var inst_34063 = (state_34065[(2)]);
var state_34065__$1 = state_34065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34065__$1,inst_34063);
} else {
if((state_val_34067 === (2))){
var state_34065__$1 = state_34065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34065__$1,(4),ch);
} else {
if((state_val_34067 === (11))){
var inst_34055 = (state_34065[(2)]);
var state_34065__$1 = state_34065;
var statearr_34086_35243 = state_34065__$1;
(statearr_34086_35243[(2)] = inst_34055);

(statearr_34086_35243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (9))){
var state_34065__$1 = state_34065;
var statearr_34090_35244 = state_34065__$1;
(statearr_34090_35244[(2)] = null);

(statearr_34090_35244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (5))){
var inst_34050 = cljs.core.async.close_BANG_(out);
var state_34065__$1 = state_34065;
var statearr_34091_35246 = state_34065__$1;
(statearr_34091_35246[(2)] = inst_34050);

(statearr_34091_35246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (10))){
var inst_34058 = (state_34065[(2)]);
var state_34065__$1 = (function (){var statearr_34093 = state_34065;
(statearr_34093[(8)] = inst_34058);

return statearr_34093;
})();
var statearr_34094_35248 = state_34065__$1;
(statearr_34094_35248[(2)] = null);

(statearr_34094_35248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34067 === (8))){
var inst_34046 = (state_34065[(7)]);
var state_34065__$1 = state_34065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34065__$1,(11),out,inst_34046);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32139__auto__ = null;
var cljs$core$async$state_machine__32139__auto____0 = (function (){
var statearr_34098 = [null,null,null,null,null,null,null,null,null];
(statearr_34098[(0)] = cljs$core$async$state_machine__32139__auto__);

(statearr_34098[(1)] = (1));

return statearr_34098;
});
var cljs$core$async$state_machine__32139__auto____1 = (function (state_34065){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_34065);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e34100){var ex__32142__auto__ = e34100;
var statearr_34101_35250 = state_34065;
(statearr_34101_35250[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_34065[(4)]))){
var statearr_34104_35251 = state_34065;
(statearr_34104_35251[(1)] = cljs.core.first((state_34065[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35253 = state_34065;
state_34065 = G__35253;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$state_machine__32139__auto__ = function(state_34065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32139__auto____1.call(this,state_34065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32139__auto____0;
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32139__auto____1;
return cljs$core$async$state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_34108 = f__32437__auto__();
(statearr_34108[(6)] = c__32436__auto___35228);

return statearr_34108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34114 = arguments.length;
switch (G__34114) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32436__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_34179){
var state_val_34180 = (state_34179[(1)]);
if((state_val_34180 === (7))){
var inst_34175 = (state_34179[(2)]);
var state_34179__$1 = state_34179;
var statearr_34181_35257 = state_34179__$1;
(statearr_34181_35257[(2)] = inst_34175);

(statearr_34181_35257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (20))){
var inst_34145 = (state_34179[(7)]);
var inst_34156 = (state_34179[(2)]);
var inst_34157 = cljs.core.next(inst_34145);
var inst_34131 = inst_34157;
var inst_34132 = null;
var inst_34133 = (0);
var inst_34134 = (0);
var state_34179__$1 = (function (){var statearr_34182 = state_34179;
(statearr_34182[(8)] = inst_34156);

(statearr_34182[(9)] = inst_34132);

(statearr_34182[(10)] = inst_34134);

(statearr_34182[(11)] = inst_34131);

(statearr_34182[(12)] = inst_34133);

return statearr_34182;
})();
var statearr_34183_35258 = state_34179__$1;
(statearr_34183_35258[(2)] = null);

(statearr_34183_35258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (1))){
var state_34179__$1 = state_34179;
var statearr_34184_35259 = state_34179__$1;
(statearr_34184_35259[(2)] = null);

(statearr_34184_35259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (4))){
var inst_34120 = (state_34179[(13)]);
var inst_34120__$1 = (state_34179[(2)]);
var inst_34121 = (inst_34120__$1 == null);
var state_34179__$1 = (function (){var statearr_34185 = state_34179;
(statearr_34185[(13)] = inst_34120__$1);

return statearr_34185;
})();
if(cljs.core.truth_(inst_34121)){
var statearr_34186_35260 = state_34179__$1;
(statearr_34186_35260[(1)] = (5));

} else {
var statearr_34187_35261 = state_34179__$1;
(statearr_34187_35261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (15))){
var state_34179__$1 = state_34179;
var statearr_34191_35262 = state_34179__$1;
(statearr_34191_35262[(2)] = null);

(statearr_34191_35262[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (21))){
var state_34179__$1 = state_34179;
var statearr_34192_35263 = state_34179__$1;
(statearr_34192_35263[(2)] = null);

(statearr_34192_35263[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (13))){
var inst_34132 = (state_34179[(9)]);
var inst_34134 = (state_34179[(10)]);
var inst_34131 = (state_34179[(11)]);
var inst_34133 = (state_34179[(12)]);
var inst_34141 = (state_34179[(2)]);
var inst_34142 = (inst_34134 + (1));
var tmp34188 = inst_34132;
var tmp34189 = inst_34131;
var tmp34190 = inst_34133;
var inst_34131__$1 = tmp34189;
var inst_34132__$1 = tmp34188;
var inst_34133__$1 = tmp34190;
var inst_34134__$1 = inst_34142;
var state_34179__$1 = (function (){var statearr_34193 = state_34179;
(statearr_34193[(9)] = inst_34132__$1);

(statearr_34193[(14)] = inst_34141);

(statearr_34193[(10)] = inst_34134__$1);

(statearr_34193[(11)] = inst_34131__$1);

(statearr_34193[(12)] = inst_34133__$1);

return statearr_34193;
})();
var statearr_34194_35264 = state_34179__$1;
(statearr_34194_35264[(2)] = null);

(statearr_34194_35264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (22))){
var state_34179__$1 = state_34179;
var statearr_34195_35265 = state_34179__$1;
(statearr_34195_35265[(2)] = null);

(statearr_34195_35265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (6))){
var inst_34120 = (state_34179[(13)]);
var inst_34129 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34120) : f.call(null,inst_34120));
var inst_34130 = cljs.core.seq(inst_34129);
var inst_34131 = inst_34130;
var inst_34132 = null;
var inst_34133 = (0);
var inst_34134 = (0);
var state_34179__$1 = (function (){var statearr_34196 = state_34179;
(statearr_34196[(9)] = inst_34132);

(statearr_34196[(10)] = inst_34134);

(statearr_34196[(11)] = inst_34131);

(statearr_34196[(12)] = inst_34133);

return statearr_34196;
})();
var statearr_34197_35266 = state_34179__$1;
(statearr_34197_35266[(2)] = null);

(statearr_34197_35266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (17))){
var inst_34145 = (state_34179[(7)]);
var inst_34149 = cljs.core.chunk_first(inst_34145);
var inst_34150 = cljs.core.chunk_rest(inst_34145);
var inst_34151 = cljs.core.count(inst_34149);
var inst_34131 = inst_34150;
var inst_34132 = inst_34149;
var inst_34133 = inst_34151;
var inst_34134 = (0);
var state_34179__$1 = (function (){var statearr_34198 = state_34179;
(statearr_34198[(9)] = inst_34132);

(statearr_34198[(10)] = inst_34134);

(statearr_34198[(11)] = inst_34131);

(statearr_34198[(12)] = inst_34133);

return statearr_34198;
})();
var statearr_34199_35267 = state_34179__$1;
(statearr_34199_35267[(2)] = null);

(statearr_34199_35267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (3))){
var inst_34177 = (state_34179[(2)]);
var state_34179__$1 = state_34179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34179__$1,inst_34177);
} else {
if((state_val_34180 === (12))){
var inst_34165 = (state_34179[(2)]);
var state_34179__$1 = state_34179;
var statearr_34200_35268 = state_34179__$1;
(statearr_34200_35268[(2)] = inst_34165);

(statearr_34200_35268[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (2))){
var state_34179__$1 = state_34179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34179__$1,(4),in$);
} else {
if((state_val_34180 === (23))){
var inst_34173 = (state_34179[(2)]);
var state_34179__$1 = state_34179;
var statearr_34201_35269 = state_34179__$1;
(statearr_34201_35269[(2)] = inst_34173);

(statearr_34201_35269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (19))){
var inst_34160 = (state_34179[(2)]);
var state_34179__$1 = state_34179;
var statearr_34202_35273 = state_34179__$1;
(statearr_34202_35273[(2)] = inst_34160);

(statearr_34202_35273[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (11))){
var inst_34145 = (state_34179[(7)]);
var inst_34131 = (state_34179[(11)]);
var inst_34145__$1 = cljs.core.seq(inst_34131);
var state_34179__$1 = (function (){var statearr_34203 = state_34179;
(statearr_34203[(7)] = inst_34145__$1);

return statearr_34203;
})();
if(inst_34145__$1){
var statearr_34204_35274 = state_34179__$1;
(statearr_34204_35274[(1)] = (14));

} else {
var statearr_34207_35279 = state_34179__$1;
(statearr_34207_35279[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (9))){
var inst_34167 = (state_34179[(2)]);
var inst_34168 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34179__$1 = (function (){var statearr_34208 = state_34179;
(statearr_34208[(15)] = inst_34167);

return statearr_34208;
})();
if(cljs.core.truth_(inst_34168)){
var statearr_34209_35283 = state_34179__$1;
(statearr_34209_35283[(1)] = (21));

} else {
var statearr_34210_35284 = state_34179__$1;
(statearr_34210_35284[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (5))){
var inst_34123 = cljs.core.async.close_BANG_(out);
var state_34179__$1 = state_34179;
var statearr_34211_35285 = state_34179__$1;
(statearr_34211_35285[(2)] = inst_34123);

(statearr_34211_35285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (14))){
var inst_34145 = (state_34179[(7)]);
var inst_34147 = cljs.core.chunked_seq_QMARK_(inst_34145);
var state_34179__$1 = state_34179;
if(inst_34147){
var statearr_34212_35286 = state_34179__$1;
(statearr_34212_35286[(1)] = (17));

} else {
var statearr_34213_35287 = state_34179__$1;
(statearr_34213_35287[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (16))){
var inst_34163 = (state_34179[(2)]);
var state_34179__$1 = state_34179;
var statearr_34214_35288 = state_34179__$1;
(statearr_34214_35288[(2)] = inst_34163);

(statearr_34214_35288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34180 === (10))){
var inst_34132 = (state_34179[(9)]);
var inst_34134 = (state_34179[(10)]);
var inst_34139 = cljs.core._nth(inst_34132,inst_34134);
var state_34179__$1 = state_34179;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34179__$1,(13),out,inst_34139);
} else {
if((state_val_34180 === (18))){
var inst_34145 = (state_34179[(7)]);
var inst_34154 = cljs.core.first(inst_34145);
var state_34179__$1 = state_34179;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34179__$1,(20),out,inst_34154);
} else {
if((state_val_34180 === (8))){
var inst_34134 = (state_34179[(10)]);
var inst_34133 = (state_34179[(12)]);
var inst_34136 = (inst_34134 < inst_34133);
var inst_34137 = inst_34136;
var state_34179__$1 = state_34179;
if(cljs.core.truth_(inst_34137)){
var statearr_34223_35292 = state_34179__$1;
(statearr_34223_35292[(1)] = (10));

} else {
var statearr_34225_35293 = state_34179__$1;
(statearr_34225_35293[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32139__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32139__auto____0 = (function (){
var statearr_34226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34226[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32139__auto__);

(statearr_34226[(1)] = (1));

return statearr_34226;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32139__auto____1 = (function (state_34179){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_34179);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e34227){var ex__32142__auto__ = e34227;
var statearr_34228_35297 = state_34179;
(statearr_34228_35297[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_34179[(4)]))){
var statearr_34229_35298 = state_34179;
(statearr_34229_35298[(1)] = cljs.core.first((state_34179[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35299 = state_34179;
state_34179 = G__35299;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32139__auto__ = function(state_34179){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32139__auto____1.call(this,state_34179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32139__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32139__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_34234 = f__32437__auto__();
(statearr_34234[(6)] = c__32436__auto__);

return statearr_34234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));

return c__32436__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34240 = arguments.length;
switch (G__34240) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34255 = arguments.length;
switch (G__34255) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34273 = arguments.length;
switch (G__34273) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32436__auto___35307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_34310){
var state_val_34311 = (state_34310[(1)]);
if((state_val_34311 === (7))){
var inst_34305 = (state_34310[(2)]);
var state_34310__$1 = state_34310;
var statearr_34316_35317 = state_34310__$1;
(statearr_34316_35317[(2)] = inst_34305);

(statearr_34316_35317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (1))){
var inst_34279 = null;
var state_34310__$1 = (function (){var statearr_34317 = state_34310;
(statearr_34317[(7)] = inst_34279);

return statearr_34317;
})();
var statearr_34321_35318 = state_34310__$1;
(statearr_34321_35318[(2)] = null);

(statearr_34321_35318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (4))){
var inst_34286 = (state_34310[(8)]);
var inst_34286__$1 = (state_34310[(2)]);
var inst_34290 = (inst_34286__$1 == null);
var inst_34291 = cljs.core.not(inst_34290);
var state_34310__$1 = (function (){var statearr_34323 = state_34310;
(statearr_34323[(8)] = inst_34286__$1);

return statearr_34323;
})();
if(inst_34291){
var statearr_34324_35325 = state_34310__$1;
(statearr_34324_35325[(1)] = (5));

} else {
var statearr_34325_35326 = state_34310__$1;
(statearr_34325_35326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (6))){
var state_34310__$1 = state_34310;
var statearr_34326_35327 = state_34310__$1;
(statearr_34326_35327[(2)] = null);

(statearr_34326_35327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (3))){
var inst_34307 = (state_34310[(2)]);
var inst_34308 = cljs.core.async.close_BANG_(out);
var state_34310__$1 = (function (){var statearr_34331 = state_34310;
(statearr_34331[(9)] = inst_34307);

return statearr_34331;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34310__$1,inst_34308);
} else {
if((state_val_34311 === (2))){
var state_34310__$1 = state_34310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34310__$1,(4),ch);
} else {
if((state_val_34311 === (11))){
var inst_34286 = (state_34310[(8)]);
var inst_34299 = (state_34310[(2)]);
var inst_34279 = inst_34286;
var state_34310__$1 = (function (){var statearr_34332 = state_34310;
(statearr_34332[(10)] = inst_34299);

(statearr_34332[(7)] = inst_34279);

return statearr_34332;
})();
var statearr_34333_35328 = state_34310__$1;
(statearr_34333_35328[(2)] = null);

(statearr_34333_35328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (9))){
var inst_34286 = (state_34310[(8)]);
var state_34310__$1 = state_34310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34310__$1,(11),out,inst_34286);
} else {
if((state_val_34311 === (5))){
var inst_34286 = (state_34310[(8)]);
var inst_34279 = (state_34310[(7)]);
var inst_34293 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34286,inst_34279);
var state_34310__$1 = state_34310;
if(inst_34293){
var statearr_34336_35332 = state_34310__$1;
(statearr_34336_35332[(1)] = (8));

} else {
var statearr_34337_35333 = state_34310__$1;
(statearr_34337_35333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (10))){
var inst_34302 = (state_34310[(2)]);
var state_34310__$1 = state_34310;
var statearr_34338_35334 = state_34310__$1;
(statearr_34338_35334[(2)] = inst_34302);

(statearr_34338_35334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34311 === (8))){
var inst_34279 = (state_34310[(7)]);
var tmp34335 = inst_34279;
var inst_34279__$1 = tmp34335;
var state_34310__$1 = (function (){var statearr_34339 = state_34310;
(statearr_34339[(7)] = inst_34279__$1);

return statearr_34339;
})();
var statearr_34340_35335 = state_34310__$1;
(statearr_34340_35335[(2)] = null);

(statearr_34340_35335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32139__auto__ = null;
var cljs$core$async$state_machine__32139__auto____0 = (function (){
var statearr_34341 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34341[(0)] = cljs$core$async$state_machine__32139__auto__);

(statearr_34341[(1)] = (1));

return statearr_34341;
});
var cljs$core$async$state_machine__32139__auto____1 = (function (state_34310){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_34310);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e34342){var ex__32142__auto__ = e34342;
var statearr_34343_35336 = state_34310;
(statearr_34343_35336[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_34310[(4)]))){
var statearr_34344_35343 = state_34310;
(statearr_34344_35343[(1)] = cljs.core.first((state_34310[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35344 = state_34310;
state_34310 = G__35344;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$state_machine__32139__auto__ = function(state_34310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32139__auto____1.call(this,state_34310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32139__auto____0;
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32139__auto____1;
return cljs$core$async$state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_34345 = f__32437__auto__();
(statearr_34345[(6)] = c__32436__auto___35307);

return statearr_34345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34347 = arguments.length;
switch (G__34347) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32436__auto___35349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_34389){
var state_val_34390 = (state_34389[(1)]);
if((state_val_34390 === (7))){
var inst_34385 = (state_34389[(2)]);
var state_34389__$1 = state_34389;
var statearr_34395_35357 = state_34389__$1;
(statearr_34395_35357[(2)] = inst_34385);

(statearr_34395_35357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (1))){
var inst_34348 = (new Array(n));
var inst_34349 = inst_34348;
var inst_34350 = (0);
var state_34389__$1 = (function (){var statearr_34399 = state_34389;
(statearr_34399[(7)] = inst_34349);

(statearr_34399[(8)] = inst_34350);

return statearr_34399;
})();
var statearr_34401_35361 = state_34389__$1;
(statearr_34401_35361[(2)] = null);

(statearr_34401_35361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (4))){
var inst_34353 = (state_34389[(9)]);
var inst_34353__$1 = (state_34389[(2)]);
var inst_34354 = (inst_34353__$1 == null);
var inst_34355 = cljs.core.not(inst_34354);
var state_34389__$1 = (function (){var statearr_34402 = state_34389;
(statearr_34402[(9)] = inst_34353__$1);

return statearr_34402;
})();
if(inst_34355){
var statearr_34403_35362 = state_34389__$1;
(statearr_34403_35362[(1)] = (5));

} else {
var statearr_34407_35363 = state_34389__$1;
(statearr_34407_35363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (15))){
var inst_34379 = (state_34389[(2)]);
var state_34389__$1 = state_34389;
var statearr_34409_35364 = state_34389__$1;
(statearr_34409_35364[(2)] = inst_34379);

(statearr_34409_35364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (13))){
var state_34389__$1 = state_34389;
var statearr_34410_35371 = state_34389__$1;
(statearr_34410_35371[(2)] = null);

(statearr_34410_35371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (6))){
var inst_34350 = (state_34389[(8)]);
var inst_34371 = (inst_34350 > (0));
var state_34389__$1 = state_34389;
if(cljs.core.truth_(inst_34371)){
var statearr_34414_35379 = state_34389__$1;
(statearr_34414_35379[(1)] = (12));

} else {
var statearr_34415_35380 = state_34389__$1;
(statearr_34415_35380[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (3))){
var inst_34387 = (state_34389[(2)]);
var state_34389__$1 = state_34389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34389__$1,inst_34387);
} else {
if((state_val_34390 === (12))){
var inst_34349 = (state_34389[(7)]);
var inst_34374 = cljs.core.vec(inst_34349);
var state_34389__$1 = state_34389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34389__$1,(15),out,inst_34374);
} else {
if((state_val_34390 === (2))){
var state_34389__$1 = state_34389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34389__$1,(4),ch);
} else {
if((state_val_34390 === (11))){
var inst_34365 = (state_34389[(2)]);
var inst_34366 = (new Array(n));
var inst_34349 = inst_34366;
var inst_34350 = (0);
var state_34389__$1 = (function (){var statearr_34417 = state_34389;
(statearr_34417[(7)] = inst_34349);

(statearr_34417[(10)] = inst_34365);

(statearr_34417[(8)] = inst_34350);

return statearr_34417;
})();
var statearr_34418_35384 = state_34389__$1;
(statearr_34418_35384[(2)] = null);

(statearr_34418_35384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (9))){
var inst_34349 = (state_34389[(7)]);
var inst_34363 = cljs.core.vec(inst_34349);
var state_34389__$1 = state_34389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34389__$1,(11),out,inst_34363);
} else {
if((state_val_34390 === (5))){
var inst_34349 = (state_34389[(7)]);
var inst_34353 = (state_34389[(9)]);
var inst_34358 = (state_34389[(11)]);
var inst_34350 = (state_34389[(8)]);
var inst_34357 = (inst_34349[inst_34350] = inst_34353);
var inst_34358__$1 = (inst_34350 + (1));
var inst_34359 = (inst_34358__$1 < n);
var state_34389__$1 = (function (){var statearr_34419 = state_34389;
(statearr_34419[(12)] = inst_34357);

(statearr_34419[(11)] = inst_34358__$1);

return statearr_34419;
})();
if(cljs.core.truth_(inst_34359)){
var statearr_34420_35395 = state_34389__$1;
(statearr_34420_35395[(1)] = (8));

} else {
var statearr_34421_35396 = state_34389__$1;
(statearr_34421_35396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (14))){
var inst_34382 = (state_34389[(2)]);
var inst_34383 = cljs.core.async.close_BANG_(out);
var state_34389__$1 = (function (){var statearr_34423 = state_34389;
(statearr_34423[(13)] = inst_34382);

return statearr_34423;
})();
var statearr_34424_35400 = state_34389__$1;
(statearr_34424_35400[(2)] = inst_34383);

(statearr_34424_35400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (10))){
var inst_34369 = (state_34389[(2)]);
var state_34389__$1 = state_34389;
var statearr_34429_35405 = state_34389__$1;
(statearr_34429_35405[(2)] = inst_34369);

(statearr_34429_35405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34390 === (8))){
var inst_34349 = (state_34389[(7)]);
var inst_34358 = (state_34389[(11)]);
var tmp34422 = inst_34349;
var inst_34349__$1 = tmp34422;
var inst_34350 = inst_34358;
var state_34389__$1 = (function (){var statearr_34430 = state_34389;
(statearr_34430[(7)] = inst_34349__$1);

(statearr_34430[(8)] = inst_34350);

return statearr_34430;
})();
var statearr_34431_35412 = state_34389__$1;
(statearr_34431_35412[(2)] = null);

(statearr_34431_35412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32139__auto__ = null;
var cljs$core$async$state_machine__32139__auto____0 = (function (){
var statearr_34433 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34433[(0)] = cljs$core$async$state_machine__32139__auto__);

(statearr_34433[(1)] = (1));

return statearr_34433;
});
var cljs$core$async$state_machine__32139__auto____1 = (function (state_34389){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_34389);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e34434){var ex__32142__auto__ = e34434;
var statearr_34435_35415 = state_34389;
(statearr_34435_35415[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_34389[(4)]))){
var statearr_34436_35416 = state_34389;
(statearr_34436_35416[(1)] = cljs.core.first((state_34389[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35417 = state_34389;
state_34389 = G__35417;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$state_machine__32139__auto__ = function(state_34389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32139__auto____1.call(this,state_34389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32139__auto____0;
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32139__auto____1;
return cljs$core$async$state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_34437 = f__32437__auto__();
(statearr_34437[(6)] = c__32436__auto___35349);

return statearr_34437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34441 = arguments.length;
switch (G__34441) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32436__auto___35419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_34486){
var state_val_34487 = (state_34486[(1)]);
if((state_val_34487 === (7))){
var inst_34482 = (state_34486[(2)]);
var state_34486__$1 = state_34486;
var statearr_34488_35420 = state_34486__$1;
(statearr_34488_35420[(2)] = inst_34482);

(statearr_34488_35420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (1))){
var inst_34442 = [];
var inst_34443 = inst_34442;
var inst_34444 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34486__$1 = (function (){var statearr_34489 = state_34486;
(statearr_34489[(7)] = inst_34443);

(statearr_34489[(8)] = inst_34444);

return statearr_34489;
})();
var statearr_34490_35421 = state_34486__$1;
(statearr_34490_35421[(2)] = null);

(statearr_34490_35421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (4))){
var inst_34447 = (state_34486[(9)]);
var inst_34447__$1 = (state_34486[(2)]);
var inst_34448 = (inst_34447__$1 == null);
var inst_34449 = cljs.core.not(inst_34448);
var state_34486__$1 = (function (){var statearr_34491 = state_34486;
(statearr_34491[(9)] = inst_34447__$1);

return statearr_34491;
})();
if(inst_34449){
var statearr_34492_35422 = state_34486__$1;
(statearr_34492_35422[(1)] = (5));

} else {
var statearr_34493_35423 = state_34486__$1;
(statearr_34493_35423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (15))){
var inst_34443 = (state_34486[(7)]);
var inst_34474 = cljs.core.vec(inst_34443);
var state_34486__$1 = state_34486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34486__$1,(18),out,inst_34474);
} else {
if((state_val_34487 === (13))){
var inst_34469 = (state_34486[(2)]);
var state_34486__$1 = state_34486;
var statearr_34494_35424 = state_34486__$1;
(statearr_34494_35424[(2)] = inst_34469);

(statearr_34494_35424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (6))){
var inst_34443 = (state_34486[(7)]);
var inst_34471 = inst_34443.length;
var inst_34472 = (inst_34471 > (0));
var state_34486__$1 = state_34486;
if(cljs.core.truth_(inst_34472)){
var statearr_34495_35425 = state_34486__$1;
(statearr_34495_35425[(1)] = (15));

} else {
var statearr_34496_35426 = state_34486__$1;
(statearr_34496_35426[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (17))){
var inst_34479 = (state_34486[(2)]);
var inst_34480 = cljs.core.async.close_BANG_(out);
var state_34486__$1 = (function (){var statearr_34497 = state_34486;
(statearr_34497[(10)] = inst_34479);

return statearr_34497;
})();
var statearr_34498_35427 = state_34486__$1;
(statearr_34498_35427[(2)] = inst_34480);

(statearr_34498_35427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (3))){
var inst_34484 = (state_34486[(2)]);
var state_34486__$1 = state_34486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34486__$1,inst_34484);
} else {
if((state_val_34487 === (12))){
var inst_34443 = (state_34486[(7)]);
var inst_34462 = cljs.core.vec(inst_34443);
var state_34486__$1 = state_34486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34486__$1,(14),out,inst_34462);
} else {
if((state_val_34487 === (2))){
var state_34486__$1 = state_34486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34486__$1,(4),ch);
} else {
if((state_val_34487 === (11))){
var inst_34443 = (state_34486[(7)]);
var inst_34447 = (state_34486[(9)]);
var inst_34451 = (state_34486[(11)]);
var inst_34459 = inst_34443.push(inst_34447);
var tmp34499 = inst_34443;
var inst_34443__$1 = tmp34499;
var inst_34444 = inst_34451;
var state_34486__$1 = (function (){var statearr_34500 = state_34486;
(statearr_34500[(7)] = inst_34443__$1);

(statearr_34500[(12)] = inst_34459);

(statearr_34500[(8)] = inst_34444);

return statearr_34500;
})();
var statearr_34501_35430 = state_34486__$1;
(statearr_34501_35430[(2)] = null);

(statearr_34501_35430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (9))){
var inst_34444 = (state_34486[(8)]);
var inst_34455 = cljs.core.keyword_identical_QMARK_(inst_34444,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34486__$1 = state_34486;
var statearr_34502_35431 = state_34486__$1;
(statearr_34502_35431[(2)] = inst_34455);

(statearr_34502_35431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (5))){
var inst_34447 = (state_34486[(9)]);
var inst_34451 = (state_34486[(11)]);
var inst_34444 = (state_34486[(8)]);
var inst_34452 = (state_34486[(13)]);
var inst_34451__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34447) : f.call(null,inst_34447));
var inst_34452__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34451__$1,inst_34444);
var state_34486__$1 = (function (){var statearr_34503 = state_34486;
(statearr_34503[(11)] = inst_34451__$1);

(statearr_34503[(13)] = inst_34452__$1);

return statearr_34503;
})();
if(inst_34452__$1){
var statearr_34504_35432 = state_34486__$1;
(statearr_34504_35432[(1)] = (8));

} else {
var statearr_34505_35433 = state_34486__$1;
(statearr_34505_35433[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (14))){
var inst_34447 = (state_34486[(9)]);
var inst_34451 = (state_34486[(11)]);
var inst_34464 = (state_34486[(2)]);
var inst_34465 = [];
var inst_34466 = inst_34465.push(inst_34447);
var inst_34443 = inst_34465;
var inst_34444 = inst_34451;
var state_34486__$1 = (function (){var statearr_34506 = state_34486;
(statearr_34506[(7)] = inst_34443);

(statearr_34506[(14)] = inst_34464);

(statearr_34506[(15)] = inst_34466);

(statearr_34506[(8)] = inst_34444);

return statearr_34506;
})();
var statearr_34507_35434 = state_34486__$1;
(statearr_34507_35434[(2)] = null);

(statearr_34507_35434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (16))){
var state_34486__$1 = state_34486;
var statearr_34508_35435 = state_34486__$1;
(statearr_34508_35435[(2)] = null);

(statearr_34508_35435[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (10))){
var inst_34457 = (state_34486[(2)]);
var state_34486__$1 = state_34486;
if(cljs.core.truth_(inst_34457)){
var statearr_34509_35436 = state_34486__$1;
(statearr_34509_35436[(1)] = (11));

} else {
var statearr_34510_35437 = state_34486__$1;
(statearr_34510_35437[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (18))){
var inst_34476 = (state_34486[(2)]);
var state_34486__$1 = state_34486;
var statearr_34511_35438 = state_34486__$1;
(statearr_34511_35438[(2)] = inst_34476);

(statearr_34511_35438[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (8))){
var inst_34452 = (state_34486[(13)]);
var state_34486__$1 = state_34486;
var statearr_34512_35439 = state_34486__$1;
(statearr_34512_35439[(2)] = inst_34452);

(statearr_34512_35439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32139__auto__ = null;
var cljs$core$async$state_machine__32139__auto____0 = (function (){
var statearr_34513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34513[(0)] = cljs$core$async$state_machine__32139__auto__);

(statearr_34513[(1)] = (1));

return statearr_34513;
});
var cljs$core$async$state_machine__32139__auto____1 = (function (state_34486){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_34486);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e34514){var ex__32142__auto__ = e34514;
var statearr_34515_35442 = state_34486;
(statearr_34515_35442[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_34486[(4)]))){
var statearr_34516_35443 = state_34486;
(statearr_34516_35443[(1)] = cljs.core.first((state_34486[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35444 = state_34486;
state_34486 = G__35444;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
cljs$core$async$state_machine__32139__auto__ = function(state_34486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32139__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32139__auto____1.call(this,state_34486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32139__auto____0;
cljs$core$async$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32139__auto____1;
return cljs$core$async$state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_34517 = f__32437__auto__();
(statearr_34517[(6)] = c__32436__auto___35419);

return statearr_34517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
