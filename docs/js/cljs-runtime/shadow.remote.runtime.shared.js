goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__32681,res){
var map__32682 = p__32681;
var map__32682__$1 = cljs.core.__destructure_map(map__32682);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32682__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32682__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__32683 = res;
var G__32683__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32683,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__32683);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32683__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__32683__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__32687 = arguments.length;
switch (G__32687) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__32689,msg,handlers,timeout_after_ms){
var map__32690 = p__32689;
var map__32690__$1 = cljs.core.__destructure_map(map__32690);
var runtime = map__32690__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32690__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___33073 = arguments.length;
var i__4830__auto___33075 = (0);
while(true){
if((i__4830__auto___33075 < len__4829__auto___33073)){
args__4835__auto__.push((arguments[i__4830__auto___33075]));

var G__33076 = (i__4830__auto___33075 + (1));
i__4830__auto___33075 = G__33076;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__32719,ev,args){
var map__32720 = p__32719;
var map__32720__$1 = cljs.core.__destructure_map(map__32720);
var runtime = map__32720__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32720__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__32721 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__32724 = null;
var count__32725 = (0);
var i__32726 = (0);
while(true){
if((i__32726 < count__32725)){
var ext = chunk__32724.cljs$core$IIndexed$_nth$arity$2(null,i__32726);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33078 = seq__32721;
var G__33079 = chunk__32724;
var G__33080 = count__32725;
var G__33081 = (i__32726 + (1));
seq__32721 = G__33078;
chunk__32724 = G__33079;
count__32725 = G__33080;
i__32726 = G__33081;
continue;
} else {
var G__33082 = seq__32721;
var G__33083 = chunk__32724;
var G__33085 = count__32725;
var G__33086 = (i__32726 + (1));
seq__32721 = G__33082;
chunk__32724 = G__33083;
count__32725 = G__33085;
i__32726 = G__33086;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32721);
if(temp__5753__auto__){
var seq__32721__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32721__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32721__$1);
var G__33087 = cljs.core.chunk_rest(seq__32721__$1);
var G__33088 = c__4649__auto__;
var G__33089 = cljs.core.count(c__4649__auto__);
var G__33090 = (0);
seq__32721 = G__33087;
chunk__32724 = G__33088;
count__32725 = G__33089;
i__32726 = G__33090;
continue;
} else {
var ext = cljs.core.first(seq__32721__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33091 = cljs.core.next(seq__32721__$1);
var G__33092 = null;
var G__33093 = (0);
var G__33094 = (0);
seq__32721 = G__33091;
chunk__32724 = G__33092;
count__32725 = G__33093;
i__32726 = G__33094;
continue;
} else {
var G__33095 = cljs.core.next(seq__32721__$1);
var G__33096 = null;
var G__33097 = (0);
var G__33098 = (0);
seq__32721 = G__33095;
chunk__32724 = G__33096;
count__32725 = G__33097;
i__32726 = G__33098;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq32715){
var G__32716 = cljs.core.first(seq32715);
var seq32715__$1 = cljs.core.next(seq32715);
var G__32717 = cljs.core.first(seq32715__$1);
var seq32715__$2 = cljs.core.next(seq32715__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32716,G__32717,seq32715__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__32731,p__32732){
var map__32733 = p__32731;
var map__32733__$1 = cljs.core.__destructure_map(map__32733);
var runtime = map__32733__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32733__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32734 = p__32732;
var map__32734__$1 = cljs.core.__destructure_map(map__32734);
var msg = map__32734__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32734__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__32742 = cljs.core.deref(state_ref);
var map__32742__$1 = cljs.core.__destructure_map(map__32742);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32742__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32742__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__32774){
var map__32775 = p__32774;
var map__32775__$1 = cljs.core.__destructure_map(map__32775);
var runtime = map__32775__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32775__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__32778,msg){
var map__32779 = p__32778;
var map__32779__$1 = cljs.core.__destructure_map(map__32779);
var runtime = map__32779__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32779__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__32852,key,p__32853){
var map__32854 = p__32852;
var map__32854__$1 = cljs.core.__destructure_map(map__32854);
var state = map__32854__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32854__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__32855 = p__32853;
var map__32855__$1 = cljs.core.__destructure_map(map__32855);
var spec = map__32855__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32855__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__32861,key,spec){
var map__32862 = p__32861;
var map__32862__$1 = cljs.core.__destructure_map(map__32862);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32862__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__32864_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__32864_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__32865_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__32865_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__32866_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__32866_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__32867_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__32867_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__32868_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__32868_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__32920,key){
var map__32922 = p__32920;
var map__32922__$1 = cljs.core.__destructure_map(map__32922);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32922__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__32928,msg){
var map__32929 = p__32928;
var map__32929__$1 = cljs.core.__destructure_map(map__32929);
var runtime = map__32929__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32929__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__32948,p__32949){
var map__32950 = p__32948;
var map__32950__$1 = cljs.core.__destructure_map(map__32950);
var runtime = map__32950__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32950__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__32952 = p__32949;
var map__32952__$1 = cljs.core.__destructure_map(map__32952);
var msg = map__32952__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32952__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32952__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33038 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33040 = null;
var count__33041 = (0);
var i__33042 = (0);
while(true){
if((i__33042 < count__33041)){
var map__33053 = chunk__33040.cljs$core$IIndexed$_nth$arity$2(null,i__33042);
var map__33053__$1 = cljs.core.__destructure_map(map__33053);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33053__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33143 = seq__33038;
var G__33144 = chunk__33040;
var G__33145 = count__33041;
var G__33146 = (i__33042 + (1));
seq__33038 = G__33143;
chunk__33040 = G__33144;
count__33041 = G__33145;
i__33042 = G__33146;
continue;
} else {
var G__33147 = seq__33038;
var G__33148 = chunk__33040;
var G__33149 = count__33041;
var G__33150 = (i__33042 + (1));
seq__33038 = G__33147;
chunk__33040 = G__33148;
count__33041 = G__33149;
i__33042 = G__33150;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33038);
if(temp__5753__auto__){
var seq__33038__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33038__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__33038__$1);
var G__33152 = cljs.core.chunk_rest(seq__33038__$1);
var G__33153 = c__4649__auto__;
var G__33154 = cljs.core.count(c__4649__auto__);
var G__33155 = (0);
seq__33038 = G__33152;
chunk__33040 = G__33153;
count__33041 = G__33154;
i__33042 = G__33155;
continue;
} else {
var map__33057 = cljs.core.first(seq__33038__$1);
var map__33057__$1 = cljs.core.__destructure_map(map__33057);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33057__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33157 = cljs.core.next(seq__33038__$1);
var G__33158 = null;
var G__33159 = (0);
var G__33160 = (0);
seq__33038 = G__33157;
chunk__33040 = G__33158;
count__33041 = G__33159;
i__33042 = G__33160;
continue;
} else {
var G__33161 = cljs.core.next(seq__33038__$1);
var G__33162 = null;
var G__33163 = (0);
var G__33164 = (0);
seq__33038 = G__33161;
chunk__33040 = G__33162;
count__33041 = G__33163;
i__33042 = G__33164;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
