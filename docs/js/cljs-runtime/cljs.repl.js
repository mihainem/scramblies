goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36221){
var map__36222 = p__36221;
var map__36222__$1 = cljs.core.__destructure_map(map__36222);
var m = map__36222__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36222__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36222__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36228_36684 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36229_36685 = null;
var count__36230_36686 = (0);
var i__36231_36687 = (0);
while(true){
if((i__36231_36687 < count__36230_36686)){
var f_36688 = chunk__36229_36685.cljs$core$IIndexed$_nth$arity$2(null,i__36231_36687);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36688], 0));


var G__36692 = seq__36228_36684;
var G__36693 = chunk__36229_36685;
var G__36694 = count__36230_36686;
var G__36695 = (i__36231_36687 + (1));
seq__36228_36684 = G__36692;
chunk__36229_36685 = G__36693;
count__36230_36686 = G__36694;
i__36231_36687 = G__36695;
continue;
} else {
var temp__5753__auto___36699 = cljs.core.seq(seq__36228_36684);
if(temp__5753__auto___36699){
var seq__36228_36702__$1 = temp__5753__auto___36699;
if(cljs.core.chunked_seq_QMARK_(seq__36228_36702__$1)){
var c__4649__auto___36703 = cljs.core.chunk_first(seq__36228_36702__$1);
var G__36704 = cljs.core.chunk_rest(seq__36228_36702__$1);
var G__36705 = c__4649__auto___36703;
var G__36706 = cljs.core.count(c__4649__auto___36703);
var G__36707 = (0);
seq__36228_36684 = G__36704;
chunk__36229_36685 = G__36705;
count__36230_36686 = G__36706;
i__36231_36687 = G__36707;
continue;
} else {
var f_36708 = cljs.core.first(seq__36228_36702__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36708], 0));


var G__36709 = cljs.core.next(seq__36228_36702__$1);
var G__36710 = null;
var G__36711 = (0);
var G__36712 = (0);
seq__36228_36684 = G__36709;
chunk__36229_36685 = G__36710;
count__36230_36686 = G__36711;
i__36231_36687 = G__36712;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36713 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36713], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36713)))?cljs.core.second(arglists_36713):arglists_36713)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36241_36717 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36242_36718 = null;
var count__36243_36719 = (0);
var i__36244_36720 = (0);
while(true){
if((i__36244_36720 < count__36243_36719)){
var vec__36266_36723 = chunk__36242_36718.cljs$core$IIndexed$_nth$arity$2(null,i__36244_36720);
var name_36724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36266_36723,(0),null);
var map__36269_36725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36266_36723,(1),null);
var map__36269_36726__$1 = cljs.core.__destructure_map(map__36269_36725);
var doc_36727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36269_36726__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36269_36726__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36724], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36728], 0));

if(cljs.core.truth_(doc_36727)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36727], 0));
} else {
}


var G__36730 = seq__36241_36717;
var G__36731 = chunk__36242_36718;
var G__36732 = count__36243_36719;
var G__36733 = (i__36244_36720 + (1));
seq__36241_36717 = G__36730;
chunk__36242_36718 = G__36731;
count__36243_36719 = G__36732;
i__36244_36720 = G__36733;
continue;
} else {
var temp__5753__auto___36734 = cljs.core.seq(seq__36241_36717);
if(temp__5753__auto___36734){
var seq__36241_36735__$1 = temp__5753__auto___36734;
if(cljs.core.chunked_seq_QMARK_(seq__36241_36735__$1)){
var c__4649__auto___36736 = cljs.core.chunk_first(seq__36241_36735__$1);
var G__36737 = cljs.core.chunk_rest(seq__36241_36735__$1);
var G__36738 = c__4649__auto___36736;
var G__36739 = cljs.core.count(c__4649__auto___36736);
var G__36740 = (0);
seq__36241_36717 = G__36737;
chunk__36242_36718 = G__36738;
count__36243_36719 = G__36739;
i__36244_36720 = G__36740;
continue;
} else {
var vec__36275_36741 = cljs.core.first(seq__36241_36735__$1);
var name_36742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36275_36741,(0),null);
var map__36278_36743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36275_36741,(1),null);
var map__36278_36744__$1 = cljs.core.__destructure_map(map__36278_36743);
var doc_36745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36278_36744__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36278_36744__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36742], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36746], 0));

if(cljs.core.truth_(doc_36745)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36745], 0));
} else {
}


var G__36747 = cljs.core.next(seq__36241_36735__$1);
var G__36748 = null;
var G__36749 = (0);
var G__36750 = (0);
seq__36241_36717 = G__36747;
chunk__36242_36718 = G__36748;
count__36243_36719 = G__36749;
i__36244_36720 = G__36750;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36279 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36280 = null;
var count__36281 = (0);
var i__36282 = (0);
while(true){
if((i__36282 < count__36281)){
var role = chunk__36280.cljs$core$IIndexed$_nth$arity$2(null,i__36282);
var temp__5753__auto___36753__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36753__$1)){
var spec_36754 = temp__5753__auto___36753__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36754)], 0));
} else {
}


var G__36755 = seq__36279;
var G__36756 = chunk__36280;
var G__36757 = count__36281;
var G__36758 = (i__36282 + (1));
seq__36279 = G__36755;
chunk__36280 = G__36756;
count__36281 = G__36757;
i__36282 = G__36758;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__36279);
if(temp__5753__auto____$1){
var seq__36279__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36279__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__36279__$1);
var G__36759 = cljs.core.chunk_rest(seq__36279__$1);
var G__36760 = c__4649__auto__;
var G__36761 = cljs.core.count(c__4649__auto__);
var G__36762 = (0);
seq__36279 = G__36759;
chunk__36280 = G__36760;
count__36281 = G__36761;
i__36282 = G__36762;
continue;
} else {
var role = cljs.core.first(seq__36279__$1);
var temp__5753__auto___36763__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36763__$2)){
var spec_36764 = temp__5753__auto___36763__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36764)], 0));
} else {
}


var G__36765 = cljs.core.next(seq__36279__$1);
var G__36766 = null;
var G__36767 = (0);
var G__36768 = (0);
seq__36279 = G__36765;
chunk__36280 = G__36766;
count__36281 = G__36767;
i__36282 = G__36768;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36772 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36773 = cljs.core.ex_cause(t);
via = G__36772;
t = G__36773;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36320 = datafied_throwable;
var map__36320__$1 = cljs.core.__destructure_map(map__36320);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36320__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36320__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36320__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36321 = cljs.core.last(via);
var map__36321__$1 = cljs.core.__destructure_map(map__36321);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36321__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36321__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36321__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36322 = data;
var map__36322__$1 = cljs.core.__destructure_map(map__36322);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36322__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36322__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36322__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36323 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36323__$1 = cljs.core.__destructure_map(map__36323);
var top_data = map__36323__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36323__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36357 = phase;
var G__36357__$1 = (((G__36357 instanceof cljs.core.Keyword))?G__36357.fqn:null);
switch (G__36357__$1) {
case "read-source":
var map__36367 = data;
var map__36367__$1 = cljs.core.__destructure_map(map__36367);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36367__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36367__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36439 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36439__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36439,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36439);
var G__36439__$2 = (cljs.core.truth_((function (){var fexpr__36442 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36442.cljs$core$IFn$_invoke$arity$1 ? fexpr__36442.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36442.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36439__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36439__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36439__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36439__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36453 = top_data;
var G__36453__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36453,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36453);
var G__36453__$2 = (cljs.core.truth_((function (){var fexpr__36454 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36454.cljs$core$IFn$_invoke$arity$1 ? fexpr__36454.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36454.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36453__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36453__$1);
var G__36453__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36453__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36453__$2);
var G__36453__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36453__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36453__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36453__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36453__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36577 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36577,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36577,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36577,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36577,(3),null);
var G__36581 = top_data;
var G__36581__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36581,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36581);
var G__36581__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36581__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36581__$1);
var G__36581__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36581__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36581__$2);
var G__36581__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36581__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36581__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36581__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36581__$4;
}

break;
case "execution":
var vec__36604 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36604,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36604,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36604,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36604,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36312_SHARP_){
var or__4223__auto__ = (p1__36312_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__36623 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36623.cljs$core$IFn$_invoke$arity$1 ? fexpr__36623.cljs$core$IFn$_invoke$arity$1(p1__36312_SHARP_) : fexpr__36623.call(null,p1__36312_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__36625 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36625__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36625,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36625);
var G__36625__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36625__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36625__$1);
var G__36625__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36625__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36625__$2);
var G__36625__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36625__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36625__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36625__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36625__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36357__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36631){
var map__36632 = p__36631;
var map__36632__$1 = cljs.core.__destructure_map(map__36632);
var triage_data = map__36632__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36632__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36632__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36632__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36632__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36632__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36632__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36632__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36632__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36633 = phase;
var G__36633__$1 = (((G__36633 instanceof cljs.core.Keyword))?G__36633.fqn:null);
switch (G__36633__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36634 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36635 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36636 = loc;
var G__36637 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36638_36794 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36639_36795 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36640_36796 = true;
var _STAR_print_fn_STAR__temp_val__36641_36797 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36640_36796);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36641_36797);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36629_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36629_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36639_36795);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36638_36794);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36634,G__36635,G__36636,G__36637) : format.call(null,G__36634,G__36635,G__36636,G__36637));

break;
case "macroexpansion":
var G__36643 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36644 = cause_type;
var G__36645 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36646 = loc;
var G__36647 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36643,G__36644,G__36645,G__36646,G__36647) : format.call(null,G__36643,G__36644,G__36645,G__36646,G__36647));

break;
case "compile-syntax-check":
var G__36648 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36649 = cause_type;
var G__36650 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36651 = loc;
var G__36652 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36648,G__36649,G__36650,G__36651,G__36652) : format.call(null,G__36648,G__36649,G__36650,G__36651,G__36652));

break;
case "compilation":
var G__36653 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36654 = cause_type;
var G__36655 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36656 = loc;
var G__36657 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36653,G__36654,G__36655,G__36656,G__36657) : format.call(null,G__36653,G__36654,G__36655,G__36656,G__36657));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36659 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36660 = symbol;
var G__36661 = loc;
var G__36662 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36667_36810 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36668_36811 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36669_36812 = true;
var _STAR_print_fn_STAR__temp_val__36670_36813 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36669_36812);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36670_36813);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36630_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36630_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36668_36811);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36667_36810);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36659,G__36660,G__36661,G__36662) : format.call(null,G__36659,G__36660,G__36661,G__36662));
} else {
var G__36674 = "Execution error%s at %s(%s).\n%s\n";
var G__36675 = cause_type;
var G__36676 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36677 = loc;
var G__36678 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36674,G__36675,G__36676,G__36677,G__36678) : format.call(null,G__36674,G__36675,G__36676,G__36677,G__36678));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36633__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
