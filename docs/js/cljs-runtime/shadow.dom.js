goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35471 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35471(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35473 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35473(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34634 = coll;
var G__34635 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34634,G__34635) : shadow.dom.lazy_native_coll_seq.call(null,G__34634,G__34635));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34666 = arguments.length;
switch (G__34666) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34674 = arguments.length;
switch (G__34674) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34678 = arguments.length;
switch (G__34678) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34689 = arguments.length;
switch (G__34689) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34702 = arguments.length;
switch (G__34702) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34711 = arguments.length;
switch (G__34711) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34717){if((e34717 instanceof Object)){
var e = e34717;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34717;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34731 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34732 = null;
var count__34733 = (0);
var i__34734 = (0);
while(true){
if((i__34734 < count__34733)){
var el = chunk__34732.cljs$core$IIndexed$_nth$arity$2(null,i__34734);
var handler_35480__$1 = ((function (seq__34731,chunk__34732,count__34733,i__34734,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34731,chunk__34732,count__34733,i__34734,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35480__$1);


var G__35481 = seq__34731;
var G__35482 = chunk__34732;
var G__35483 = count__34733;
var G__35484 = (i__34734 + (1));
seq__34731 = G__35481;
chunk__34732 = G__35482;
count__34733 = G__35483;
i__34734 = G__35484;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34731);
if(temp__5753__auto__){
var seq__34731__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34731__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__34731__$1);
var G__35485 = cljs.core.chunk_rest(seq__34731__$1);
var G__35486 = c__4649__auto__;
var G__35487 = cljs.core.count(c__4649__auto__);
var G__35488 = (0);
seq__34731 = G__35485;
chunk__34732 = G__35486;
count__34733 = G__35487;
i__34734 = G__35488;
continue;
} else {
var el = cljs.core.first(seq__34731__$1);
var handler_35489__$1 = ((function (seq__34731,chunk__34732,count__34733,i__34734,el,seq__34731__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34731,chunk__34732,count__34733,i__34734,el,seq__34731__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35489__$1);


var G__35490 = cljs.core.next(seq__34731__$1);
var G__35491 = null;
var G__35492 = (0);
var G__35493 = (0);
seq__34731 = G__35490;
chunk__34732 = G__35491;
count__34733 = G__35492;
i__34734 = G__35493;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34749 = arguments.length;
switch (G__34749) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34759 = cljs.core.seq(events);
var chunk__34760 = null;
var count__34761 = (0);
var i__34762 = (0);
while(true){
if((i__34762 < count__34761)){
var vec__34772 = chunk__34760.cljs$core$IIndexed$_nth$arity$2(null,i__34762);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34772,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34772,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35495 = seq__34759;
var G__35496 = chunk__34760;
var G__35497 = count__34761;
var G__35498 = (i__34762 + (1));
seq__34759 = G__35495;
chunk__34760 = G__35496;
count__34761 = G__35497;
i__34762 = G__35498;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34759);
if(temp__5753__auto__){
var seq__34759__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34759__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__34759__$1);
var G__35499 = cljs.core.chunk_rest(seq__34759__$1);
var G__35500 = c__4649__auto__;
var G__35501 = cljs.core.count(c__4649__auto__);
var G__35502 = (0);
seq__34759 = G__35499;
chunk__34760 = G__35500;
count__34761 = G__35501;
i__34762 = G__35502;
continue;
} else {
var vec__34776 = cljs.core.first(seq__34759__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34776,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34776,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35503 = cljs.core.next(seq__34759__$1);
var G__35504 = null;
var G__35505 = (0);
var G__35506 = (0);
seq__34759 = G__35503;
chunk__34760 = G__35504;
count__34761 = G__35505;
i__34762 = G__35506;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34785 = cljs.core.seq(styles);
var chunk__34786 = null;
var count__34787 = (0);
var i__34788 = (0);
while(true){
if((i__34788 < count__34787)){
var vec__34807 = chunk__34786.cljs$core$IIndexed$_nth$arity$2(null,i__34788);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34807,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34807,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35507 = seq__34785;
var G__35508 = chunk__34786;
var G__35509 = count__34787;
var G__35510 = (i__34788 + (1));
seq__34785 = G__35507;
chunk__34786 = G__35508;
count__34787 = G__35509;
i__34788 = G__35510;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34785);
if(temp__5753__auto__){
var seq__34785__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34785__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__34785__$1);
var G__35511 = cljs.core.chunk_rest(seq__34785__$1);
var G__35512 = c__4649__auto__;
var G__35513 = cljs.core.count(c__4649__auto__);
var G__35514 = (0);
seq__34785 = G__35511;
chunk__34786 = G__35512;
count__34787 = G__35513;
i__34788 = G__35514;
continue;
} else {
var vec__34813 = cljs.core.first(seq__34785__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34813,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34813,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35515 = cljs.core.next(seq__34785__$1);
var G__35516 = null;
var G__35517 = (0);
var G__35518 = (0);
seq__34785 = G__35515;
chunk__34786 = G__35516;
count__34787 = G__35517;
i__34788 = G__35518;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34825_35519 = key;
var G__34825_35520__$1 = (((G__34825_35519 instanceof cljs.core.Keyword))?G__34825_35519.fqn:null);
switch (G__34825_35520__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35522 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_35522,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_35522,"aria-");
}
})())){
el.setAttribute(ks_35522,value);
} else {
(el[ks_35522] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34845){
var map__34846 = p__34845;
var map__34846__$1 = cljs.core.__destructure_map(map__34846);
var props = map__34846__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34846__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34851 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34851,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34851,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34851,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34855 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34855,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34855;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34859 = arguments.length;
switch (G__34859) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34867){
var vec__34869 = p__34867;
var seq__34870 = cljs.core.seq(vec__34869);
var first__34871 = cljs.core.first(seq__34870);
var seq__34870__$1 = cljs.core.next(seq__34870);
var nn = first__34871;
var first__34871__$1 = cljs.core.first(seq__34870__$1);
var seq__34870__$2 = cljs.core.next(seq__34870__$1);
var np = first__34871__$1;
var nc = seq__34870__$2;
var node = vec__34869;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34875 = nn;
var G__34876 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34875,G__34876) : create_fn.call(null,G__34875,G__34876));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34877 = nn;
var G__34878 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34877,G__34878) : create_fn.call(null,G__34877,G__34878));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34882 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34882,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34882,(1),null);
var seq__34885_35524 = cljs.core.seq(node_children);
var chunk__34886_35525 = null;
var count__34887_35526 = (0);
var i__34888_35527 = (0);
while(true){
if((i__34888_35527 < count__34887_35526)){
var child_struct_35529 = chunk__34886_35525.cljs$core$IIndexed$_nth$arity$2(null,i__34888_35527);
var children_35531 = shadow.dom.dom_node(child_struct_35529);
if(cljs.core.seq_QMARK_(children_35531)){
var seq__34931_35532 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35531));
var chunk__34933_35533 = null;
var count__34934_35534 = (0);
var i__34935_35535 = (0);
while(true){
if((i__34935_35535 < count__34934_35534)){
var child_35536 = chunk__34933_35533.cljs$core$IIndexed$_nth$arity$2(null,i__34935_35535);
if(cljs.core.truth_(child_35536)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35536);


var G__35537 = seq__34931_35532;
var G__35538 = chunk__34933_35533;
var G__35539 = count__34934_35534;
var G__35540 = (i__34935_35535 + (1));
seq__34931_35532 = G__35537;
chunk__34933_35533 = G__35538;
count__34934_35534 = G__35539;
i__34935_35535 = G__35540;
continue;
} else {
var G__35541 = seq__34931_35532;
var G__35542 = chunk__34933_35533;
var G__35543 = count__34934_35534;
var G__35544 = (i__34935_35535 + (1));
seq__34931_35532 = G__35541;
chunk__34933_35533 = G__35542;
count__34934_35534 = G__35543;
i__34935_35535 = G__35544;
continue;
}
} else {
var temp__5753__auto___35545 = cljs.core.seq(seq__34931_35532);
if(temp__5753__auto___35545){
var seq__34931_35546__$1 = temp__5753__auto___35545;
if(cljs.core.chunked_seq_QMARK_(seq__34931_35546__$1)){
var c__4649__auto___35547 = cljs.core.chunk_first(seq__34931_35546__$1);
var G__35548 = cljs.core.chunk_rest(seq__34931_35546__$1);
var G__35549 = c__4649__auto___35547;
var G__35550 = cljs.core.count(c__4649__auto___35547);
var G__35551 = (0);
seq__34931_35532 = G__35548;
chunk__34933_35533 = G__35549;
count__34934_35534 = G__35550;
i__34935_35535 = G__35551;
continue;
} else {
var child_35552 = cljs.core.first(seq__34931_35546__$1);
if(cljs.core.truth_(child_35552)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35552);


var G__35554 = cljs.core.next(seq__34931_35546__$1);
var G__35555 = null;
var G__35556 = (0);
var G__35557 = (0);
seq__34931_35532 = G__35554;
chunk__34933_35533 = G__35555;
count__34934_35534 = G__35556;
i__34935_35535 = G__35557;
continue;
} else {
var G__35558 = cljs.core.next(seq__34931_35546__$1);
var G__35559 = null;
var G__35560 = (0);
var G__35561 = (0);
seq__34931_35532 = G__35558;
chunk__34933_35533 = G__35559;
count__34934_35534 = G__35560;
i__34935_35535 = G__35561;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35531);
}


var G__35562 = seq__34885_35524;
var G__35563 = chunk__34886_35525;
var G__35564 = count__34887_35526;
var G__35565 = (i__34888_35527 + (1));
seq__34885_35524 = G__35562;
chunk__34886_35525 = G__35563;
count__34887_35526 = G__35564;
i__34888_35527 = G__35565;
continue;
} else {
var temp__5753__auto___35566 = cljs.core.seq(seq__34885_35524);
if(temp__5753__auto___35566){
var seq__34885_35567__$1 = temp__5753__auto___35566;
if(cljs.core.chunked_seq_QMARK_(seq__34885_35567__$1)){
var c__4649__auto___35568 = cljs.core.chunk_first(seq__34885_35567__$1);
var G__35569 = cljs.core.chunk_rest(seq__34885_35567__$1);
var G__35570 = c__4649__auto___35568;
var G__35571 = cljs.core.count(c__4649__auto___35568);
var G__35572 = (0);
seq__34885_35524 = G__35569;
chunk__34886_35525 = G__35570;
count__34887_35526 = G__35571;
i__34888_35527 = G__35572;
continue;
} else {
var child_struct_35573 = cljs.core.first(seq__34885_35567__$1);
var children_35574 = shadow.dom.dom_node(child_struct_35573);
if(cljs.core.seq_QMARK_(children_35574)){
var seq__34944_35575 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35574));
var chunk__34946_35576 = null;
var count__34947_35577 = (0);
var i__34948_35578 = (0);
while(true){
if((i__34948_35578 < count__34947_35577)){
var child_35579 = chunk__34946_35576.cljs$core$IIndexed$_nth$arity$2(null,i__34948_35578);
if(cljs.core.truth_(child_35579)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35579);


var G__35580 = seq__34944_35575;
var G__35581 = chunk__34946_35576;
var G__35582 = count__34947_35577;
var G__35583 = (i__34948_35578 + (1));
seq__34944_35575 = G__35580;
chunk__34946_35576 = G__35581;
count__34947_35577 = G__35582;
i__34948_35578 = G__35583;
continue;
} else {
var G__35584 = seq__34944_35575;
var G__35585 = chunk__34946_35576;
var G__35586 = count__34947_35577;
var G__35587 = (i__34948_35578 + (1));
seq__34944_35575 = G__35584;
chunk__34946_35576 = G__35585;
count__34947_35577 = G__35586;
i__34948_35578 = G__35587;
continue;
}
} else {
var temp__5753__auto___35588__$1 = cljs.core.seq(seq__34944_35575);
if(temp__5753__auto___35588__$1){
var seq__34944_35589__$1 = temp__5753__auto___35588__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34944_35589__$1)){
var c__4649__auto___35590 = cljs.core.chunk_first(seq__34944_35589__$1);
var G__35591 = cljs.core.chunk_rest(seq__34944_35589__$1);
var G__35592 = c__4649__auto___35590;
var G__35593 = cljs.core.count(c__4649__auto___35590);
var G__35594 = (0);
seq__34944_35575 = G__35591;
chunk__34946_35576 = G__35592;
count__34947_35577 = G__35593;
i__34948_35578 = G__35594;
continue;
} else {
var child_35595 = cljs.core.first(seq__34944_35589__$1);
if(cljs.core.truth_(child_35595)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35595);


var G__35596 = cljs.core.next(seq__34944_35589__$1);
var G__35597 = null;
var G__35598 = (0);
var G__35599 = (0);
seq__34944_35575 = G__35596;
chunk__34946_35576 = G__35597;
count__34947_35577 = G__35598;
i__34948_35578 = G__35599;
continue;
} else {
var G__35600 = cljs.core.next(seq__34944_35589__$1);
var G__35601 = null;
var G__35602 = (0);
var G__35603 = (0);
seq__34944_35575 = G__35600;
chunk__34946_35576 = G__35601;
count__34947_35577 = G__35602;
i__34948_35578 = G__35603;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35574);
}


var G__35604 = cljs.core.next(seq__34885_35567__$1);
var G__35605 = null;
var G__35606 = (0);
var G__35607 = (0);
seq__34885_35524 = G__35604;
chunk__34886_35525 = G__35605;
count__34887_35526 = G__35606;
i__34888_35527 = G__35607;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34961 = cljs.core.seq(node);
var chunk__34962 = null;
var count__34963 = (0);
var i__34964 = (0);
while(true){
if((i__34964 < count__34963)){
var n = chunk__34962.cljs$core$IIndexed$_nth$arity$2(null,i__34964);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35618 = seq__34961;
var G__35619 = chunk__34962;
var G__35620 = count__34963;
var G__35621 = (i__34964 + (1));
seq__34961 = G__35618;
chunk__34962 = G__35619;
count__34963 = G__35620;
i__34964 = G__35621;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34961);
if(temp__5753__auto__){
var seq__34961__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34961__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__34961__$1);
var G__35622 = cljs.core.chunk_rest(seq__34961__$1);
var G__35623 = c__4649__auto__;
var G__35624 = cljs.core.count(c__4649__auto__);
var G__35625 = (0);
seq__34961 = G__35622;
chunk__34962 = G__35623;
count__34963 = G__35624;
i__34964 = G__35625;
continue;
} else {
var n = cljs.core.first(seq__34961__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35626 = cljs.core.next(seq__34961__$1);
var G__35627 = null;
var G__35628 = (0);
var G__35629 = (0);
seq__34961 = G__35626;
chunk__34962 = G__35627;
count__34963 = G__35628;
i__34964 = G__35629;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34967 = arguments.length;
switch (G__34967) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34975 = arguments.length;
switch (G__34975) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34990 = arguments.length;
switch (G__34990) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___35633 = arguments.length;
var i__4830__auto___35634 = (0);
while(true){
if((i__4830__auto___35634 < len__4829__auto___35633)){
args__4835__auto__.push((arguments[i__4830__auto___35634]));

var G__35635 = (i__4830__auto___35634 + (1));
i__4830__auto___35634 = G__35635;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35031_35636 = cljs.core.seq(nodes);
var chunk__35032_35637 = null;
var count__35033_35638 = (0);
var i__35034_35639 = (0);
while(true){
if((i__35034_35639 < count__35033_35638)){
var node_35640 = chunk__35032_35637.cljs$core$IIndexed$_nth$arity$2(null,i__35034_35639);
fragment.appendChild(shadow.dom._to_dom(node_35640));


var G__35641 = seq__35031_35636;
var G__35642 = chunk__35032_35637;
var G__35643 = count__35033_35638;
var G__35644 = (i__35034_35639 + (1));
seq__35031_35636 = G__35641;
chunk__35032_35637 = G__35642;
count__35033_35638 = G__35643;
i__35034_35639 = G__35644;
continue;
} else {
var temp__5753__auto___35645 = cljs.core.seq(seq__35031_35636);
if(temp__5753__auto___35645){
var seq__35031_35646__$1 = temp__5753__auto___35645;
if(cljs.core.chunked_seq_QMARK_(seq__35031_35646__$1)){
var c__4649__auto___35647 = cljs.core.chunk_first(seq__35031_35646__$1);
var G__35650 = cljs.core.chunk_rest(seq__35031_35646__$1);
var G__35651 = c__4649__auto___35647;
var G__35652 = cljs.core.count(c__4649__auto___35647);
var G__35653 = (0);
seq__35031_35636 = G__35650;
chunk__35032_35637 = G__35651;
count__35033_35638 = G__35652;
i__35034_35639 = G__35653;
continue;
} else {
var node_35654 = cljs.core.first(seq__35031_35646__$1);
fragment.appendChild(shadow.dom._to_dom(node_35654));


var G__35655 = cljs.core.next(seq__35031_35646__$1);
var G__35656 = null;
var G__35657 = (0);
var G__35658 = (0);
seq__35031_35636 = G__35655;
chunk__35032_35637 = G__35656;
count__35033_35638 = G__35657;
i__35034_35639 = G__35658;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35006){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35006));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35060_35659 = cljs.core.seq(scripts);
var chunk__35061_35660 = null;
var count__35062_35661 = (0);
var i__35063_35662 = (0);
while(true){
if((i__35063_35662 < count__35062_35661)){
var vec__35076_35663 = chunk__35061_35660.cljs$core$IIndexed$_nth$arity$2(null,i__35063_35662);
var script_tag_35664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35076_35663,(0),null);
var script_body_35665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35076_35663,(1),null);
eval(script_body_35665);


var G__35666 = seq__35060_35659;
var G__35667 = chunk__35061_35660;
var G__35668 = count__35062_35661;
var G__35669 = (i__35063_35662 + (1));
seq__35060_35659 = G__35666;
chunk__35061_35660 = G__35667;
count__35062_35661 = G__35668;
i__35063_35662 = G__35669;
continue;
} else {
var temp__5753__auto___35670 = cljs.core.seq(seq__35060_35659);
if(temp__5753__auto___35670){
var seq__35060_35672__$1 = temp__5753__auto___35670;
if(cljs.core.chunked_seq_QMARK_(seq__35060_35672__$1)){
var c__4649__auto___35673 = cljs.core.chunk_first(seq__35060_35672__$1);
var G__35674 = cljs.core.chunk_rest(seq__35060_35672__$1);
var G__35675 = c__4649__auto___35673;
var G__35676 = cljs.core.count(c__4649__auto___35673);
var G__35677 = (0);
seq__35060_35659 = G__35674;
chunk__35061_35660 = G__35675;
count__35062_35661 = G__35676;
i__35063_35662 = G__35677;
continue;
} else {
var vec__35080_35678 = cljs.core.first(seq__35060_35672__$1);
var script_tag_35679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080_35678,(0),null);
var script_body_35680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080_35678,(1),null);
eval(script_body_35680);


var G__35682 = cljs.core.next(seq__35060_35672__$1);
var G__35683 = null;
var G__35684 = (0);
var G__35685 = (0);
seq__35060_35659 = G__35682;
chunk__35061_35660 = G__35683;
count__35062_35661 = G__35684;
i__35063_35662 = G__35685;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35083){
var vec__35084 = p__35083;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35084,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35084,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35091 = arguments.length;
switch (G__35091) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35108 = cljs.core.seq(style_keys);
var chunk__35109 = null;
var count__35110 = (0);
var i__35111 = (0);
while(true){
if((i__35111 < count__35110)){
var it = chunk__35109.cljs$core$IIndexed$_nth$arity$2(null,i__35111);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35687 = seq__35108;
var G__35688 = chunk__35109;
var G__35689 = count__35110;
var G__35690 = (i__35111 + (1));
seq__35108 = G__35687;
chunk__35109 = G__35688;
count__35110 = G__35689;
i__35111 = G__35690;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35108);
if(temp__5753__auto__){
var seq__35108__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35108__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35108__$1);
var G__35698 = cljs.core.chunk_rest(seq__35108__$1);
var G__35699 = c__4649__auto__;
var G__35700 = cljs.core.count(c__4649__auto__);
var G__35701 = (0);
seq__35108 = G__35698;
chunk__35109 = G__35699;
count__35110 = G__35700;
i__35111 = G__35701;
continue;
} else {
var it = cljs.core.first(seq__35108__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35702 = cljs.core.next(seq__35108__$1);
var G__35703 = null;
var G__35704 = (0);
var G__35705 = (0);
seq__35108 = G__35702;
chunk__35109 = G__35703;
count__35110 = G__35704;
i__35111 = G__35705;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k35119,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__35127 = k35119;
var G__35127__$1 = (((G__35127 instanceof cljs.core.Keyword))?G__35127.fqn:null);
switch (G__35127__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35119,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__35131){
var vec__35132 = p__35131;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35132,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35132,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35118){
var self__ = this;
var G__35118__$1 = this;
return (new cljs.core.RecordIter((0),G__35118__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35120,other35121){
var self__ = this;
var this35120__$1 = this;
return (((!((other35121 == null)))) && ((((this35120__$1.constructor === other35121.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35120__$1.x,other35121.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35120__$1.y,other35121.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35120__$1.__extmap,other35121.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k35119){
var self__ = this;
var this__4479__auto____$1 = this;
var G__35148 = k35119;
var G__35148__$1 = (((G__35148 instanceof cljs.core.Keyword))?G__35148.fqn:null);
switch (G__35148__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35119);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__35118){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__35151 = cljs.core.keyword_identical_QMARK_;
var expr__35152 = k__4481__auto__;
if(cljs.core.truth_((pred__35151.cljs$core$IFn$_invoke$arity$2 ? pred__35151.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35152) : pred__35151.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35152)))){
return (new shadow.dom.Coordinate(G__35118,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35151.cljs$core$IFn$_invoke$arity$2 ? pred__35151.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35152) : pred__35151.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35152)))){
return (new shadow.dom.Coordinate(self__.x,G__35118,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__35118),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__35118){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35118,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35124){
var extmap__4512__auto__ = (function (){var G__35162 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35124,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35124)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35162);
} else {
return G__35162;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35124),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35124),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k35170,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__35181 = k35170;
var G__35181__$1 = (((G__35181 instanceof cljs.core.Keyword))?G__35181.fqn:null);
switch (G__35181__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35170,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__35184){
var vec__35185 = p__35184;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35185,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35185,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35169){
var self__ = this;
var G__35169__$1 = this;
return (new cljs.core.RecordIter((0),G__35169__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35171,other35172){
var self__ = this;
var this35171__$1 = this;
return (((!((other35172 == null)))) && ((((this35171__$1.constructor === other35172.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35171__$1.w,other35172.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35171__$1.h,other35172.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35171__$1.__extmap,other35172.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k35170){
var self__ = this;
var this__4479__auto____$1 = this;
var G__35215 = k35170;
var G__35215__$1 = (((G__35215 instanceof cljs.core.Keyword))?G__35215.fqn:null);
switch (G__35215__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35170);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__35169){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__35217 = cljs.core.keyword_identical_QMARK_;
var expr__35218 = k__4481__auto__;
if(cljs.core.truth_((pred__35217.cljs$core$IFn$_invoke$arity$2 ? pred__35217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35218) : pred__35217.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35218)))){
return (new shadow.dom.Size(G__35169,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35217.cljs$core$IFn$_invoke$arity$2 ? pred__35217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35218) : pred__35217.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35218)))){
return (new shadow.dom.Size(self__.w,G__35169,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__35169),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__35169){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35169,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35176){
var extmap__4512__auto__ = (function (){var G__35222 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35176,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35176)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35222);
} else {
return G__35222;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35176),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35176),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__35759 = (i + (1));
var G__35760 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35759;
ret = G__35760;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35229){
var vec__35230 = p__35229;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35230,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35230,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35241 = arguments.length;
switch (G__35241) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35764 = ps;
var G__35765 = (i + (1));
el__$1 = G__35764;
i = G__35765;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35270 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35270,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35270,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35270,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35275_35766 = cljs.core.seq(props);
var chunk__35276_35767 = null;
var count__35277_35768 = (0);
var i__35278_35769 = (0);
while(true){
if((i__35278_35769 < count__35277_35768)){
var vec__35294_35770 = chunk__35276_35767.cljs$core$IIndexed$_nth$arity$2(null,i__35278_35769);
var k_35771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35294_35770,(0),null);
var v_35772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35294_35770,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_35771);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35771),v_35772);


var G__35773 = seq__35275_35766;
var G__35774 = chunk__35276_35767;
var G__35775 = count__35277_35768;
var G__35776 = (i__35278_35769 + (1));
seq__35275_35766 = G__35773;
chunk__35276_35767 = G__35774;
count__35277_35768 = G__35775;
i__35278_35769 = G__35776;
continue;
} else {
var temp__5753__auto___35777 = cljs.core.seq(seq__35275_35766);
if(temp__5753__auto___35777){
var seq__35275_35778__$1 = temp__5753__auto___35777;
if(cljs.core.chunked_seq_QMARK_(seq__35275_35778__$1)){
var c__4649__auto___35779 = cljs.core.chunk_first(seq__35275_35778__$1);
var G__35780 = cljs.core.chunk_rest(seq__35275_35778__$1);
var G__35781 = c__4649__auto___35779;
var G__35782 = cljs.core.count(c__4649__auto___35779);
var G__35783 = (0);
seq__35275_35766 = G__35780;
chunk__35276_35767 = G__35781;
count__35277_35768 = G__35782;
i__35278_35769 = G__35783;
continue;
} else {
var vec__35300_35784 = cljs.core.first(seq__35275_35778__$1);
var k_35785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35300_35784,(0),null);
var v_35786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35300_35784,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_35785);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35785),v_35786);


var G__35787 = cljs.core.next(seq__35275_35778__$1);
var G__35788 = null;
var G__35789 = (0);
var G__35790 = (0);
seq__35275_35766 = G__35787;
chunk__35276_35767 = G__35788;
count__35277_35768 = G__35789;
i__35278_35769 = G__35790;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35308 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35308,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35308,(1),null);
var seq__35311_35791 = cljs.core.seq(node_children);
var chunk__35313_35792 = null;
var count__35314_35793 = (0);
var i__35315_35794 = (0);
while(true){
if((i__35315_35794 < count__35314_35793)){
var child_struct_35795 = chunk__35313_35792.cljs$core$IIndexed$_nth$arity$2(null,i__35315_35794);
if((!((child_struct_35795 == null)))){
if(typeof child_struct_35795 === 'string'){
var text_35796 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35796),child_struct_35795].join(''));
} else {
var children_35797 = shadow.dom.svg_node(child_struct_35795);
if(cljs.core.seq_QMARK_(children_35797)){
var seq__35365_35798 = cljs.core.seq(children_35797);
var chunk__35367_35799 = null;
var count__35368_35800 = (0);
var i__35369_35801 = (0);
while(true){
if((i__35369_35801 < count__35368_35800)){
var child_35802 = chunk__35367_35799.cljs$core$IIndexed$_nth$arity$2(null,i__35369_35801);
if(cljs.core.truth_(child_35802)){
node.appendChild(child_35802);


var G__35803 = seq__35365_35798;
var G__35804 = chunk__35367_35799;
var G__35805 = count__35368_35800;
var G__35806 = (i__35369_35801 + (1));
seq__35365_35798 = G__35803;
chunk__35367_35799 = G__35804;
count__35368_35800 = G__35805;
i__35369_35801 = G__35806;
continue;
} else {
var G__35807 = seq__35365_35798;
var G__35808 = chunk__35367_35799;
var G__35809 = count__35368_35800;
var G__35810 = (i__35369_35801 + (1));
seq__35365_35798 = G__35807;
chunk__35367_35799 = G__35808;
count__35368_35800 = G__35809;
i__35369_35801 = G__35810;
continue;
}
} else {
var temp__5753__auto___35811 = cljs.core.seq(seq__35365_35798);
if(temp__5753__auto___35811){
var seq__35365_35813__$1 = temp__5753__auto___35811;
if(cljs.core.chunked_seq_QMARK_(seq__35365_35813__$1)){
var c__4649__auto___35814 = cljs.core.chunk_first(seq__35365_35813__$1);
var G__35815 = cljs.core.chunk_rest(seq__35365_35813__$1);
var G__35816 = c__4649__auto___35814;
var G__35817 = cljs.core.count(c__4649__auto___35814);
var G__35818 = (0);
seq__35365_35798 = G__35815;
chunk__35367_35799 = G__35816;
count__35368_35800 = G__35817;
i__35369_35801 = G__35818;
continue;
} else {
var child_35819 = cljs.core.first(seq__35365_35813__$1);
if(cljs.core.truth_(child_35819)){
node.appendChild(child_35819);


var G__35820 = cljs.core.next(seq__35365_35813__$1);
var G__35821 = null;
var G__35822 = (0);
var G__35823 = (0);
seq__35365_35798 = G__35820;
chunk__35367_35799 = G__35821;
count__35368_35800 = G__35822;
i__35369_35801 = G__35823;
continue;
} else {
var G__35824 = cljs.core.next(seq__35365_35813__$1);
var G__35825 = null;
var G__35826 = (0);
var G__35827 = (0);
seq__35365_35798 = G__35824;
chunk__35367_35799 = G__35825;
count__35368_35800 = G__35826;
i__35369_35801 = G__35827;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35797);
}
}


var G__35828 = seq__35311_35791;
var G__35829 = chunk__35313_35792;
var G__35830 = count__35314_35793;
var G__35831 = (i__35315_35794 + (1));
seq__35311_35791 = G__35828;
chunk__35313_35792 = G__35829;
count__35314_35793 = G__35830;
i__35315_35794 = G__35831;
continue;
} else {
var G__35832 = seq__35311_35791;
var G__35833 = chunk__35313_35792;
var G__35834 = count__35314_35793;
var G__35835 = (i__35315_35794 + (1));
seq__35311_35791 = G__35832;
chunk__35313_35792 = G__35833;
count__35314_35793 = G__35834;
i__35315_35794 = G__35835;
continue;
}
} else {
var temp__5753__auto___35836 = cljs.core.seq(seq__35311_35791);
if(temp__5753__auto___35836){
var seq__35311_35837__$1 = temp__5753__auto___35836;
if(cljs.core.chunked_seq_QMARK_(seq__35311_35837__$1)){
var c__4649__auto___35838 = cljs.core.chunk_first(seq__35311_35837__$1);
var G__35839 = cljs.core.chunk_rest(seq__35311_35837__$1);
var G__35840 = c__4649__auto___35838;
var G__35841 = cljs.core.count(c__4649__auto___35838);
var G__35842 = (0);
seq__35311_35791 = G__35839;
chunk__35313_35792 = G__35840;
count__35314_35793 = G__35841;
i__35315_35794 = G__35842;
continue;
} else {
var child_struct_35843 = cljs.core.first(seq__35311_35837__$1);
if((!((child_struct_35843 == null)))){
if(typeof child_struct_35843 === 'string'){
var text_35845 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35845),child_struct_35843].join(''));
} else {
var children_35846 = shadow.dom.svg_node(child_struct_35843);
if(cljs.core.seq_QMARK_(children_35846)){
var seq__35406_35847 = cljs.core.seq(children_35846);
var chunk__35408_35848 = null;
var count__35409_35849 = (0);
var i__35410_35850 = (0);
while(true){
if((i__35410_35850 < count__35409_35849)){
var child_35851 = chunk__35408_35848.cljs$core$IIndexed$_nth$arity$2(null,i__35410_35850);
if(cljs.core.truth_(child_35851)){
node.appendChild(child_35851);


var G__35852 = seq__35406_35847;
var G__35853 = chunk__35408_35848;
var G__35854 = count__35409_35849;
var G__35855 = (i__35410_35850 + (1));
seq__35406_35847 = G__35852;
chunk__35408_35848 = G__35853;
count__35409_35849 = G__35854;
i__35410_35850 = G__35855;
continue;
} else {
var G__35857 = seq__35406_35847;
var G__35858 = chunk__35408_35848;
var G__35859 = count__35409_35849;
var G__35860 = (i__35410_35850 + (1));
seq__35406_35847 = G__35857;
chunk__35408_35848 = G__35858;
count__35409_35849 = G__35859;
i__35410_35850 = G__35860;
continue;
}
} else {
var temp__5753__auto___35861__$1 = cljs.core.seq(seq__35406_35847);
if(temp__5753__auto___35861__$1){
var seq__35406_35862__$1 = temp__5753__auto___35861__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35406_35862__$1)){
var c__4649__auto___35863 = cljs.core.chunk_first(seq__35406_35862__$1);
var G__35864 = cljs.core.chunk_rest(seq__35406_35862__$1);
var G__35865 = c__4649__auto___35863;
var G__35866 = cljs.core.count(c__4649__auto___35863);
var G__35867 = (0);
seq__35406_35847 = G__35864;
chunk__35408_35848 = G__35865;
count__35409_35849 = G__35866;
i__35410_35850 = G__35867;
continue;
} else {
var child_35868 = cljs.core.first(seq__35406_35862__$1);
if(cljs.core.truth_(child_35868)){
node.appendChild(child_35868);


var G__35869 = cljs.core.next(seq__35406_35862__$1);
var G__35870 = null;
var G__35871 = (0);
var G__35872 = (0);
seq__35406_35847 = G__35869;
chunk__35408_35848 = G__35870;
count__35409_35849 = G__35871;
i__35410_35850 = G__35872;
continue;
} else {
var G__35873 = cljs.core.next(seq__35406_35862__$1);
var G__35874 = null;
var G__35875 = (0);
var G__35876 = (0);
seq__35406_35847 = G__35873;
chunk__35408_35848 = G__35874;
count__35409_35849 = G__35875;
i__35410_35850 = G__35876;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35846);
}
}


var G__35877 = cljs.core.next(seq__35311_35837__$1);
var G__35878 = null;
var G__35879 = (0);
var G__35880 = (0);
seq__35311_35791 = G__35877;
chunk__35313_35792 = G__35878;
count__35314_35793 = G__35879;
i__35315_35794 = G__35880;
continue;
} else {
var G__35881 = cljs.core.next(seq__35311_35837__$1);
var G__35882 = null;
var G__35883 = (0);
var G__35884 = (0);
seq__35311_35791 = G__35881;
chunk__35313_35792 = G__35882;
count__35314_35793 = G__35883;
i__35315_35794 = G__35884;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___35885 = arguments.length;
var i__4830__auto___35886 = (0);
while(true){
if((i__4830__auto___35886 < len__4829__auto___35885)){
args__4835__auto__.push((arguments[i__4830__auto___35886]));

var G__35887 = (i__4830__auto___35886 + (1));
i__4830__auto___35886 = G__35887;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35428){
var G__35429 = cljs.core.first(seq35428);
var seq35428__$1 = cljs.core.next(seq35428);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35429,seq35428__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35441 = arguments.length;
switch (G__35441) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__32436__auto___35896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32437__auto__ = (function (){var switch__32138__auto__ = (function (state_35449){
var state_val_35450 = (state_35449[(1)]);
if((state_val_35450 === (1))){
var state_35449__$1 = state_35449;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35449__$1,(2),once_or_cleanup);
} else {
if((state_val_35450 === (2))){
var inst_35446 = (state_35449[(2)]);
var inst_35447 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35449__$1 = (function (){var statearr_35451 = state_35449;
(statearr_35451[(7)] = inst_35446);

return statearr_35451;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35449__$1,inst_35447);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32139__auto__ = null;
var shadow$dom$state_machine__32139__auto____0 = (function (){
var statearr_35452 = [null,null,null,null,null,null,null,null];
(statearr_35452[(0)] = shadow$dom$state_machine__32139__auto__);

(statearr_35452[(1)] = (1));

return statearr_35452;
});
var shadow$dom$state_machine__32139__auto____1 = (function (state_35449){
while(true){
var ret_value__32140__auto__ = (function (){try{while(true){
var result__32141__auto__ = switch__32138__auto__(state_35449);
if(cljs.core.keyword_identical_QMARK_(result__32141__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32141__auto__;
}
break;
}
}catch (e35453){var ex__32142__auto__ = e35453;
var statearr_35454_35898 = state_35449;
(statearr_35454_35898[(2)] = ex__32142__auto__);


if(cljs.core.seq((state_35449[(4)]))){
var statearr_35455_35899 = state_35449;
(statearr_35455_35899[(1)] = cljs.core.first((state_35449[(4)])));

} else {
throw ex__32142__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32140__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35900 = state_35449;
state_35449 = G__35900;
continue;
} else {
return ret_value__32140__auto__;
}
break;
}
});
shadow$dom$state_machine__32139__auto__ = function(state_35449){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32139__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32139__auto____1.call(this,state_35449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32139__auto____0;
shadow$dom$state_machine__32139__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32139__auto____1;
return shadow$dom$state_machine__32139__auto__;
})()
})();
var state__32438__auto__ = (function (){var statearr_35456 = f__32437__auto__();
(statearr_35456[(6)] = c__32436__auto___35896);

return statearr_35456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32438__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
