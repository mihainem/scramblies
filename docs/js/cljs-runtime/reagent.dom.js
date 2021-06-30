goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__37961 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37962 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37962);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__37965 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__37966 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__37966);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37965);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__37961);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__37969 = arguments.length;
switch (G__37969) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__37970 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37970,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37970,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__37975_38003 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__37976_38004 = null;
var count__37977_38005 = (0);
var i__37978_38006 = (0);
while(true){
if((i__37978_38006 < count__37977_38005)){
var vec__37988_38009 = chunk__37976_38004.cljs$core$IIndexed$_nth$arity$2(null,i__37978_38006);
var container_38010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37988_38009,(0),null);
var comp_38011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37988_38009,(1),null);
reagent.dom.re_render_component(comp_38011,container_38010);


var G__38012 = seq__37975_38003;
var G__38013 = chunk__37976_38004;
var G__38014 = count__37977_38005;
var G__38015 = (i__37978_38006 + (1));
seq__37975_38003 = G__38012;
chunk__37976_38004 = G__38013;
count__37977_38005 = G__38014;
i__37978_38006 = G__38015;
continue;
} else {
var temp__5753__auto___38016 = cljs.core.seq(seq__37975_38003);
if(temp__5753__auto___38016){
var seq__37975_38017__$1 = temp__5753__auto___38016;
if(cljs.core.chunked_seq_QMARK_(seq__37975_38017__$1)){
var c__4649__auto___38018 = cljs.core.chunk_first(seq__37975_38017__$1);
var G__38019 = cljs.core.chunk_rest(seq__37975_38017__$1);
var G__38020 = c__4649__auto___38018;
var G__38021 = cljs.core.count(c__4649__auto___38018);
var G__38022 = (0);
seq__37975_38003 = G__38019;
chunk__37976_38004 = G__38020;
count__37977_38005 = G__38021;
i__37978_38006 = G__38022;
continue;
} else {
var vec__37992_38023 = cljs.core.first(seq__37975_38017__$1);
var container_38024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37992_38023,(0),null);
var comp_38025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37992_38023,(1),null);
reagent.dom.re_render_component(comp_38025,container_38024);


var G__38027 = cljs.core.next(seq__37975_38017__$1);
var G__38028 = null;
var G__38029 = (0);
var G__38030 = (0);
seq__37975_38003 = G__38027;
chunk__37976_38004 = G__38028;
count__37977_38005 = G__38029;
i__37978_38006 = G__38030;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
