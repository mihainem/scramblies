goog.provide('ui.core');
ui.core.scramble_QMARK_ = (function ui$core$scramble_QMARK_(scramblies,word){
while(true){
if((((cljs.core.count(word) > (0))) && (clojure.string.includes_QMARK_(scramblies,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(word)))))){
var G__26904 = clojure.string.replace_first(scramblies,cljs.core.first(word),"");
var G__26905 = clojure.string.replace_first(word,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(word)),"");
scramblies = G__26904;
word = G__26905;
continue;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(word),(0));
}
break;
}
});
ui.core.handle_request = (function ui$core$handle_request(letters,word){
var c__26616__auto___26906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26617__auto__ = (function (){var switch__26546__auto__ = (function (state_26876){
var state_val_26877 = (state_26876[(1)]);
if((state_val_26877 === (1))){
var inst_26871 = ["http://localhost:8888/scramble/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letters),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)].join('');
var inst_26872 = cljs_http.client.get(inst_26871);
var state_26876__$1 = state_26876;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26876__$1,(2),inst_26872);
} else {
if((state_val_26877 === (2))){
var inst_26874 = (state_26876[(2)]);
var state_26876__$1 = state_26876;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26876__$1,inst_26874);
} else {
return null;
}
}
});
return (function() {
var ui$core$handle_request_$_state_machine__26547__auto__ = null;
var ui$core$handle_request_$_state_machine__26547__auto____0 = (function (){
var statearr_26878 = [null,null,null,null,null,null,null];
(statearr_26878[(0)] = ui$core$handle_request_$_state_machine__26547__auto__);

(statearr_26878[(1)] = (1));

return statearr_26878;
});
var ui$core$handle_request_$_state_machine__26547__auto____1 = (function (state_26876){
while(true){
var ret_value__26548__auto__ = (function (){try{while(true){
var result__26549__auto__ = switch__26546__auto__(state_26876);
if(cljs.core.keyword_identical_QMARK_(result__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26549__auto__;
}
break;
}
}catch (e26879){var ex__26550__auto__ = e26879;
var statearr_26880_26907 = state_26876;
(statearr_26880_26907[(2)] = ex__26550__auto__);


if(cljs.core.seq((state_26876[(4)]))){
var statearr_26881_26908 = state_26876;
(statearr_26881_26908[(1)] = cljs.core.first((state_26876[(4)])));

} else {
throw ex__26550__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26909 = state_26876;
state_26876 = G__26909;
continue;
} else {
return ret_value__26548__auto__;
}
break;
}
});
ui$core$handle_request_$_state_machine__26547__auto__ = function(state_26876){
switch(arguments.length){
case 0:
return ui$core$handle_request_$_state_machine__26547__auto____0.call(this);
case 1:
return ui$core$handle_request_$_state_machine__26547__auto____1.call(this,state_26876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$handle_request_$_state_machine__26547__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$handle_request_$_state_machine__26547__auto____0;
ui$core$handle_request_$_state_machine__26547__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$handle_request_$_state_machine__26547__auto____1;
return ui$core$handle_request_$_state_machine__26547__auto__;
})()
})();
var state__26618__auto__ = (function (){var statearr_26882 = f__26617__auto__();
(statearr_26882[(6)] = c__26616__auto___26906);

return statearr_26882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26618__auto__);
}));


var c__26616__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26617__auto__ = (function (){var switch__26546__auto__ = (function (state_26895){
var state_val_26896 = (state_26895[(1)]);
if((state_val_26896 === (1))){
var inst_26883 = ["http://localhost:8888/scramble/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letters),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)].join('');
var inst_26884 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_26885 = cljs.core.PersistentHashMap.EMPTY;
var inst_26886 = [false,inst_26885];
var inst_26887 = cljs.core.PersistentHashMap.fromArrays(inst_26884,inst_26886);
var inst_26888 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_26883,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26887], 0));
var state_26895__$1 = state_26895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26895__$1,(2),inst_26888);
} else {
if((state_val_26896 === (2))){
var inst_26890 = (state_26895[(2)]);
var inst_26891 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_26890);
var inst_26892 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26891], 0));
var inst_26893 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26890], 0));
var state_26895__$1 = (function (){var statearr_26897 = state_26895;
(statearr_26897[(7)] = inst_26892);

return statearr_26897;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26895__$1,inst_26893);
} else {
return null;
}
}
});
return (function() {
var ui$core$handle_request_$_state_machine__26547__auto__ = null;
var ui$core$handle_request_$_state_machine__26547__auto____0 = (function (){
var statearr_26898 = [null,null,null,null,null,null,null,null];
(statearr_26898[(0)] = ui$core$handle_request_$_state_machine__26547__auto__);

(statearr_26898[(1)] = (1));

return statearr_26898;
});
var ui$core$handle_request_$_state_machine__26547__auto____1 = (function (state_26895){
while(true){
var ret_value__26548__auto__ = (function (){try{while(true){
var result__26549__auto__ = switch__26546__auto__(state_26895);
if(cljs.core.keyword_identical_QMARK_(result__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26549__auto__;
}
break;
}
}catch (e26899){var ex__26550__auto__ = e26899;
var statearr_26900_26910 = state_26895;
(statearr_26900_26910[(2)] = ex__26550__auto__);


if(cljs.core.seq((state_26895[(4)]))){
var statearr_26901_26911 = state_26895;
(statearr_26901_26911[(1)] = cljs.core.first((state_26895[(4)])));

} else {
throw ex__26550__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26912 = state_26895;
state_26895 = G__26912;
continue;
} else {
return ret_value__26548__auto__;
}
break;
}
});
ui$core$handle_request_$_state_machine__26547__auto__ = function(state_26895){
switch(arguments.length){
case 0:
return ui$core$handle_request_$_state_machine__26547__auto____0.call(this);
case 1:
return ui$core$handle_request_$_state_machine__26547__auto____1.call(this,state_26895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$handle_request_$_state_machine__26547__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$handle_request_$_state_machine__26547__auto____0;
ui$core$handle_request_$_state_machine__26547__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$handle_request_$_state_machine__26547__auto____1;
return ui$core$handle_request_$_state_machine__26547__auto__;
})()
})();
var state__26618__auto__ = (function (){var statearr_26902 = f__26617__auto__();
(statearr_26902[(6)] = c__26616__auto__);

return statearr_26902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26618__auto__);
}));

return c__26616__auto__;
});
ui.core.scramblies_form = (function ui$core$scramblies_form(){
var letters = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var word = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(letters))], 0));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(letters),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Add scrambled letters",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26903_SHARP_){
return cljs.core.reset_BANG_(letters,p1__26903_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(word),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Add word",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_(word,e.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Scramblie?",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
alert(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ui.core.scramble_QMARK_(cljs.core.deref(letters),cljs.core.deref(word))));

return ui.core.handle_request(cljs.core.deref(letters),cljs.core.deref(word));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Scramblie?"], null)], null)], null);
});
});
ui.core.home_page = (function ui$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Is your word hidding in the scramblies ?"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.scramblies_form], null)], null);
});
ui.core.mount_root = (function ui$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.home_page], null),document.getElementById("app"));
});
ui.core.init_BANG_ = (function ui$core$init_BANG_(){
return ui.core.mount_root();
});
goog.exportSymbol('ui.core.init_BANG_', ui.core.init_BANG_);

//# sourceMappingURL=ui.core.js.map
