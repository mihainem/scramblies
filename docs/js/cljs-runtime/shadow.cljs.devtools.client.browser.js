goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___37736 = arguments.length;
var i__4830__auto___37737 = (0);
while(true){
if((i__4830__auto___37737 < len__4829__auto___37736)){
args__4835__auto__.push((arguments[i__4830__auto___37737]));

var G__37738 = (i__4830__auto___37737 + (1));
i__4830__auto___37737 = G__37738;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37495){
var G__37496 = cljs.core.first(seq37495);
var seq37495__$1 = cljs.core.next(seq37495);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37496,seq37495__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37503 = cljs.core.seq(sources);
var chunk__37504 = null;
var count__37505 = (0);
var i__37506 = (0);
while(true){
if((i__37506 < count__37505)){
var map__37514 = chunk__37504.cljs$core$IIndexed$_nth$arity$2(null,i__37506);
var map__37514__$1 = cljs.core.__destructure_map(map__37514);
var src = map__37514__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37514__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37514__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37514__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37514__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37515){var e_37739 = e37515;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37739);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37739.message)].join('')));
}

var G__37740 = seq__37503;
var G__37741 = chunk__37504;
var G__37742 = count__37505;
var G__37743 = (i__37506 + (1));
seq__37503 = G__37740;
chunk__37504 = G__37741;
count__37505 = G__37742;
i__37506 = G__37743;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37503);
if(temp__5753__auto__){
var seq__37503__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37503__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__37503__$1);
var G__37744 = cljs.core.chunk_rest(seq__37503__$1);
var G__37745 = c__4649__auto__;
var G__37746 = cljs.core.count(c__4649__auto__);
var G__37747 = (0);
seq__37503 = G__37744;
chunk__37504 = G__37745;
count__37505 = G__37746;
i__37506 = G__37747;
continue;
} else {
var map__37516 = cljs.core.first(seq__37503__$1);
var map__37516__$1 = cljs.core.__destructure_map(map__37516);
var src = map__37516__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37516__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37516__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37516__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37516__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37517){var e_37749 = e37517;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37749);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37749.message)].join('')));
}

var G__37750 = cljs.core.next(seq__37503__$1);
var G__37751 = null;
var G__37752 = (0);
var G__37753 = (0);
seq__37503 = G__37750;
chunk__37504 = G__37751;
count__37505 = G__37752;
i__37506 = G__37753;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37518 = cljs.core.seq(js_requires);
var chunk__37519 = null;
var count__37520 = (0);
var i__37521 = (0);
while(true){
if((i__37521 < count__37520)){
var js_ns = chunk__37519.cljs$core$IIndexed$_nth$arity$2(null,i__37521);
var require_str_37759 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37759);


var G__37760 = seq__37518;
var G__37761 = chunk__37519;
var G__37762 = count__37520;
var G__37763 = (i__37521 + (1));
seq__37518 = G__37760;
chunk__37519 = G__37761;
count__37520 = G__37762;
i__37521 = G__37763;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37518);
if(temp__5753__auto__){
var seq__37518__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37518__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__37518__$1);
var G__37764 = cljs.core.chunk_rest(seq__37518__$1);
var G__37765 = c__4649__auto__;
var G__37766 = cljs.core.count(c__4649__auto__);
var G__37767 = (0);
seq__37518 = G__37764;
chunk__37519 = G__37765;
count__37520 = G__37766;
i__37521 = G__37767;
continue;
} else {
var js_ns = cljs.core.first(seq__37518__$1);
var require_str_37768 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37768);


var G__37769 = cljs.core.next(seq__37518__$1);
var G__37770 = null;
var G__37771 = (0);
var G__37772 = (0);
seq__37518 = G__37769;
chunk__37519 = G__37770;
count__37520 = G__37771;
i__37521 = G__37772;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37525){
var map__37526 = p__37525;
var map__37526__$1 = cljs.core.__destructure_map(map__37526);
var msg = map__37526__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37526__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37526__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37529(s__37530){
return (new cljs.core.LazySeq(null,(function (){
var s__37530__$1 = s__37530;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37530__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37535 = cljs.core.first(xs__6308__auto__);
var map__37535__$1 = cljs.core.__destructure_map(map__37535);
var src = map__37535__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37535__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37535__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__37530__$1,map__37535,map__37535__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37526,map__37526__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37529_$_iter__37531(s__37532){
return (new cljs.core.LazySeq(null,((function (s__37530__$1,map__37535,map__37535__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37526,map__37526__$1,msg,info,reload_info){
return (function (){
var s__37532__$1 = s__37532;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37532__$1);
if(temp__5753__auto____$1){
var s__37532__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37532__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__37532__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__37534 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__37533 = (0);
while(true){
if((i__37533 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__37533);
cljs.core.chunk_append(b__37534,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37774 = (i__37533 + (1));
i__37533 = G__37774;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37534),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37529_$_iter__37531(cljs.core.chunk_rest(s__37532__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37534),null);
}
} else {
var warning = cljs.core.first(s__37532__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37529_$_iter__37531(cljs.core.rest(s__37532__$2)));
}
} else {
return null;
}
break;
}
});})(s__37530__$1,map__37535,map__37535__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37526,map__37526__$1,msg,info,reload_info))
,null,null));
});})(s__37530__$1,map__37535,map__37535__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37526,map__37526__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37529(cljs.core.rest(s__37530__$1)));
} else {
var G__37775 = cljs.core.rest(s__37530__$1);
s__37530__$1 = G__37775;
continue;
}
} else {
var G__37776 = cljs.core.rest(s__37530__$1);
s__37530__$1 = G__37776;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37536_37777 = cljs.core.seq(warnings);
var chunk__37537_37778 = null;
var count__37538_37779 = (0);
var i__37539_37780 = (0);
while(true){
if((i__37539_37780 < count__37538_37779)){
var map__37544_37781 = chunk__37537_37778.cljs$core$IIndexed$_nth$arity$2(null,i__37539_37780);
var map__37544_37782__$1 = cljs.core.__destructure_map(map__37544_37781);
var w_37783 = map__37544_37782__$1;
var msg_37784__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37544_37782__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37544_37782__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37544_37782__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37544_37782__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37787)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37785),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37786),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37784__$1)].join(''));


var G__37788 = seq__37536_37777;
var G__37789 = chunk__37537_37778;
var G__37790 = count__37538_37779;
var G__37791 = (i__37539_37780 + (1));
seq__37536_37777 = G__37788;
chunk__37537_37778 = G__37789;
count__37538_37779 = G__37790;
i__37539_37780 = G__37791;
continue;
} else {
var temp__5753__auto___37792 = cljs.core.seq(seq__37536_37777);
if(temp__5753__auto___37792){
var seq__37536_37793__$1 = temp__5753__auto___37792;
if(cljs.core.chunked_seq_QMARK_(seq__37536_37793__$1)){
var c__4649__auto___37794 = cljs.core.chunk_first(seq__37536_37793__$1);
var G__37796 = cljs.core.chunk_rest(seq__37536_37793__$1);
var G__37797 = c__4649__auto___37794;
var G__37798 = cljs.core.count(c__4649__auto___37794);
var G__37799 = (0);
seq__37536_37777 = G__37796;
chunk__37537_37778 = G__37797;
count__37538_37779 = G__37798;
i__37539_37780 = G__37799;
continue;
} else {
var map__37545_37800 = cljs.core.first(seq__37536_37793__$1);
var map__37545_37801__$1 = cljs.core.__destructure_map(map__37545_37800);
var w_37802 = map__37545_37801__$1;
var msg_37803__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37545_37801__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37545_37801__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37545_37801__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37545_37801__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37806)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37804),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37805),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37803__$1)].join(''));


var G__37807 = cljs.core.next(seq__37536_37793__$1);
var G__37808 = null;
var G__37809 = (0);
var G__37810 = (0);
seq__37536_37777 = G__37807;
chunk__37537_37778 = G__37808;
count__37538_37779 = G__37809;
i__37539_37780 = G__37810;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37524_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37524_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37555){
var map__37556 = p__37555;
var map__37556__$1 = cljs.core.__destructure_map(map__37556);
var msg = map__37556__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37556__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37559 = cljs.core.seq(updates);
var chunk__37562 = null;
var count__37563 = (0);
var i__37564 = (0);
while(true){
if((i__37564 < count__37563)){
var path = chunk__37562.cljs$core$IIndexed$_nth$arity$2(null,i__37564);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37609_37813 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37613_37814 = null;
var count__37614_37815 = (0);
var i__37615_37816 = (0);
while(true){
if((i__37615_37816 < count__37614_37815)){
var node_37817 = chunk__37613_37814.cljs$core$IIndexed$_nth$arity$2(null,i__37615_37816);
if(cljs.core.not(node_37817.shadow$old)){
var path_match_37818 = shadow.cljs.devtools.client.browser.match_paths(node_37817.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37818)){
var new_link_37819 = (function (){var G__37652 = node_37817.cloneNode(true);
G__37652.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37818),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37652;
})();
(node_37817.shadow$old = true);

(new_link_37819.onload = ((function (seq__37609_37813,chunk__37613_37814,count__37614_37815,i__37615_37816,seq__37559,chunk__37562,count__37563,i__37564,new_link_37819,path_match_37818,node_37817,path,map__37556,map__37556__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37817);
});})(seq__37609_37813,chunk__37613_37814,count__37614_37815,i__37615_37816,seq__37559,chunk__37562,count__37563,i__37564,new_link_37819,path_match_37818,node_37817,path,map__37556,map__37556__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37818], 0));

goog.dom.insertSiblingAfter(new_link_37819,node_37817);


var G__37820 = seq__37609_37813;
var G__37821 = chunk__37613_37814;
var G__37822 = count__37614_37815;
var G__37823 = (i__37615_37816 + (1));
seq__37609_37813 = G__37820;
chunk__37613_37814 = G__37821;
count__37614_37815 = G__37822;
i__37615_37816 = G__37823;
continue;
} else {
var G__37824 = seq__37609_37813;
var G__37825 = chunk__37613_37814;
var G__37826 = count__37614_37815;
var G__37827 = (i__37615_37816 + (1));
seq__37609_37813 = G__37824;
chunk__37613_37814 = G__37825;
count__37614_37815 = G__37826;
i__37615_37816 = G__37827;
continue;
}
} else {
var G__37828 = seq__37609_37813;
var G__37829 = chunk__37613_37814;
var G__37830 = count__37614_37815;
var G__37831 = (i__37615_37816 + (1));
seq__37609_37813 = G__37828;
chunk__37613_37814 = G__37829;
count__37614_37815 = G__37830;
i__37615_37816 = G__37831;
continue;
}
} else {
var temp__5753__auto___37832 = cljs.core.seq(seq__37609_37813);
if(temp__5753__auto___37832){
var seq__37609_37833__$1 = temp__5753__auto___37832;
if(cljs.core.chunked_seq_QMARK_(seq__37609_37833__$1)){
var c__4649__auto___37834 = cljs.core.chunk_first(seq__37609_37833__$1);
var G__37835 = cljs.core.chunk_rest(seq__37609_37833__$1);
var G__37836 = c__4649__auto___37834;
var G__37837 = cljs.core.count(c__4649__auto___37834);
var G__37838 = (0);
seq__37609_37813 = G__37835;
chunk__37613_37814 = G__37836;
count__37614_37815 = G__37837;
i__37615_37816 = G__37838;
continue;
} else {
var node_37839 = cljs.core.first(seq__37609_37833__$1);
if(cljs.core.not(node_37839.shadow$old)){
var path_match_37840 = shadow.cljs.devtools.client.browser.match_paths(node_37839.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37840)){
var new_link_37841 = (function (){var G__37657 = node_37839.cloneNode(true);
G__37657.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37840),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37657;
})();
(node_37839.shadow$old = true);

(new_link_37841.onload = ((function (seq__37609_37813,chunk__37613_37814,count__37614_37815,i__37615_37816,seq__37559,chunk__37562,count__37563,i__37564,new_link_37841,path_match_37840,node_37839,seq__37609_37833__$1,temp__5753__auto___37832,path,map__37556,map__37556__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37839);
});})(seq__37609_37813,chunk__37613_37814,count__37614_37815,i__37615_37816,seq__37559,chunk__37562,count__37563,i__37564,new_link_37841,path_match_37840,node_37839,seq__37609_37833__$1,temp__5753__auto___37832,path,map__37556,map__37556__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37840], 0));

goog.dom.insertSiblingAfter(new_link_37841,node_37839);


var G__37842 = cljs.core.next(seq__37609_37833__$1);
var G__37843 = null;
var G__37844 = (0);
var G__37845 = (0);
seq__37609_37813 = G__37842;
chunk__37613_37814 = G__37843;
count__37614_37815 = G__37844;
i__37615_37816 = G__37845;
continue;
} else {
var G__37846 = cljs.core.next(seq__37609_37833__$1);
var G__37847 = null;
var G__37848 = (0);
var G__37849 = (0);
seq__37609_37813 = G__37846;
chunk__37613_37814 = G__37847;
count__37614_37815 = G__37848;
i__37615_37816 = G__37849;
continue;
}
} else {
var G__37850 = cljs.core.next(seq__37609_37833__$1);
var G__37851 = null;
var G__37852 = (0);
var G__37853 = (0);
seq__37609_37813 = G__37850;
chunk__37613_37814 = G__37851;
count__37614_37815 = G__37852;
i__37615_37816 = G__37853;
continue;
}
}
} else {
}
}
break;
}


var G__37854 = seq__37559;
var G__37855 = chunk__37562;
var G__37856 = count__37563;
var G__37857 = (i__37564 + (1));
seq__37559 = G__37854;
chunk__37562 = G__37855;
count__37563 = G__37856;
i__37564 = G__37857;
continue;
} else {
var G__37858 = seq__37559;
var G__37859 = chunk__37562;
var G__37860 = count__37563;
var G__37861 = (i__37564 + (1));
seq__37559 = G__37858;
chunk__37562 = G__37859;
count__37563 = G__37860;
i__37564 = G__37861;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37559);
if(temp__5753__auto__){
var seq__37559__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37559__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__37559__$1);
var G__37862 = cljs.core.chunk_rest(seq__37559__$1);
var G__37863 = c__4649__auto__;
var G__37864 = cljs.core.count(c__4649__auto__);
var G__37865 = (0);
seq__37559 = G__37862;
chunk__37562 = G__37863;
count__37563 = G__37864;
i__37564 = G__37865;
continue;
} else {
var path = cljs.core.first(seq__37559__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37658_37866 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37662_37867 = null;
var count__37663_37868 = (0);
var i__37664_37869 = (0);
while(true){
if((i__37664_37869 < count__37663_37868)){
var node_37870 = chunk__37662_37867.cljs$core$IIndexed$_nth$arity$2(null,i__37664_37869);
if(cljs.core.not(node_37870.shadow$old)){
var path_match_37871 = shadow.cljs.devtools.client.browser.match_paths(node_37870.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37871)){
var new_link_37872 = (function (){var G__37693 = node_37870.cloneNode(true);
G__37693.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37871),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37693;
})();
(node_37870.shadow$old = true);

(new_link_37872.onload = ((function (seq__37658_37866,chunk__37662_37867,count__37663_37868,i__37664_37869,seq__37559,chunk__37562,count__37563,i__37564,new_link_37872,path_match_37871,node_37870,path,seq__37559__$1,temp__5753__auto__,map__37556,map__37556__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37870);
});})(seq__37658_37866,chunk__37662_37867,count__37663_37868,i__37664_37869,seq__37559,chunk__37562,count__37563,i__37564,new_link_37872,path_match_37871,node_37870,path,seq__37559__$1,temp__5753__auto__,map__37556,map__37556__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37871], 0));

goog.dom.insertSiblingAfter(new_link_37872,node_37870);


var G__37873 = seq__37658_37866;
var G__37874 = chunk__37662_37867;
var G__37875 = count__37663_37868;
var G__37876 = (i__37664_37869 + (1));
seq__37658_37866 = G__37873;
chunk__37662_37867 = G__37874;
count__37663_37868 = G__37875;
i__37664_37869 = G__37876;
continue;
} else {
var G__37877 = seq__37658_37866;
var G__37878 = chunk__37662_37867;
var G__37879 = count__37663_37868;
var G__37880 = (i__37664_37869 + (1));
seq__37658_37866 = G__37877;
chunk__37662_37867 = G__37878;
count__37663_37868 = G__37879;
i__37664_37869 = G__37880;
continue;
}
} else {
var G__37881 = seq__37658_37866;
var G__37882 = chunk__37662_37867;
var G__37883 = count__37663_37868;
var G__37884 = (i__37664_37869 + (1));
seq__37658_37866 = G__37881;
chunk__37662_37867 = G__37882;
count__37663_37868 = G__37883;
i__37664_37869 = G__37884;
continue;
}
} else {
var temp__5753__auto___37885__$1 = cljs.core.seq(seq__37658_37866);
if(temp__5753__auto___37885__$1){
var seq__37658_37886__$1 = temp__5753__auto___37885__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37658_37886__$1)){
var c__4649__auto___37887 = cljs.core.chunk_first(seq__37658_37886__$1);
var G__37888 = cljs.core.chunk_rest(seq__37658_37886__$1);
var G__37889 = c__4649__auto___37887;
var G__37890 = cljs.core.count(c__4649__auto___37887);
var G__37891 = (0);
seq__37658_37866 = G__37888;
chunk__37662_37867 = G__37889;
count__37663_37868 = G__37890;
i__37664_37869 = G__37891;
continue;
} else {
var node_37893 = cljs.core.first(seq__37658_37886__$1);
if(cljs.core.not(node_37893.shadow$old)){
var path_match_37895 = shadow.cljs.devtools.client.browser.match_paths(node_37893.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37895)){
var new_link_37896 = (function (){var G__37698 = node_37893.cloneNode(true);
G__37698.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37895),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37698;
})();
(node_37893.shadow$old = true);

(new_link_37896.onload = ((function (seq__37658_37866,chunk__37662_37867,count__37663_37868,i__37664_37869,seq__37559,chunk__37562,count__37563,i__37564,new_link_37896,path_match_37895,node_37893,seq__37658_37886__$1,temp__5753__auto___37885__$1,path,seq__37559__$1,temp__5753__auto__,map__37556,map__37556__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_37893);
});})(seq__37658_37866,chunk__37662_37867,count__37663_37868,i__37664_37869,seq__37559,chunk__37562,count__37563,i__37564,new_link_37896,path_match_37895,node_37893,seq__37658_37886__$1,temp__5753__auto___37885__$1,path,seq__37559__$1,temp__5753__auto__,map__37556,map__37556__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37895], 0));

goog.dom.insertSiblingAfter(new_link_37896,node_37893);


var G__37897 = cljs.core.next(seq__37658_37886__$1);
var G__37898 = null;
var G__37899 = (0);
var G__37900 = (0);
seq__37658_37866 = G__37897;
chunk__37662_37867 = G__37898;
count__37663_37868 = G__37899;
i__37664_37869 = G__37900;
continue;
} else {
var G__37901 = cljs.core.next(seq__37658_37886__$1);
var G__37902 = null;
var G__37903 = (0);
var G__37904 = (0);
seq__37658_37866 = G__37901;
chunk__37662_37867 = G__37902;
count__37663_37868 = G__37903;
i__37664_37869 = G__37904;
continue;
}
} else {
var G__37905 = cljs.core.next(seq__37658_37886__$1);
var G__37906 = null;
var G__37907 = (0);
var G__37908 = (0);
seq__37658_37866 = G__37905;
chunk__37662_37867 = G__37906;
count__37663_37868 = G__37907;
i__37664_37869 = G__37908;
continue;
}
}
} else {
}
}
break;
}


var G__37909 = cljs.core.next(seq__37559__$1);
var G__37910 = null;
var G__37911 = (0);
var G__37912 = (0);
seq__37559 = G__37909;
chunk__37562 = G__37910;
count__37563 = G__37911;
i__37564 = G__37912;
continue;
} else {
var G__37913 = cljs.core.next(seq__37559__$1);
var G__37914 = null;
var G__37915 = (0);
var G__37916 = (0);
seq__37559 = G__37913;
chunk__37562 = G__37914;
count__37563 = G__37915;
i__37564 = G__37916;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37706){
var map__37707 = p__37706;
var map__37707__$1 = cljs.core.__destructure_map(map__37707);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37707__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37709){
var map__37710 = p__37709;
var map__37710__$1 = cljs.core.__destructure_map(map__37710);
var _ = map__37710__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37710__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37711,done,error){
var map__37712 = p__37711;
var map__37712__$1 = cljs.core.__destructure_map(map__37712);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37712__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37713,done,error){
var map__37714 = p__37713;
var map__37714__$1 = cljs.core.__destructure_map(map__37714);
var msg = map__37714__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37714__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37714__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37714__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37715){
var map__37716 = p__37715;
var map__37716__$1 = cljs.core.__destructure_map(map__37716);
var src = map__37716__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37716__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37717 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37717) : done.call(null,G__37717));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37718){
var map__37719 = p__37718;
var map__37719__$1 = cljs.core.__destructure_map(map__37719);
var msg__$1 = map__37719__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37719__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37720){var ex = e37720;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37721){
var map__37722 = p__37721;
var map__37722__$1 = cljs.core.__destructure_map(map__37722);
var env = map__37722__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37722__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__37729){
var map__37730 = p__37729;
var map__37730__$1 = cljs.core.__destructure_map(map__37730);
var msg = map__37730__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37730__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37732){
var map__37733 = p__37732;
var map__37733__$1 = cljs.core.__destructure_map(map__37733);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37733__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37733__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37734){
var map__37735 = p__37734;
var map__37735__$1 = cljs.core.__destructure_map(map__37735);
var svc = map__37735__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37735__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
