goog.provide('ui.core');
ui.core.handle_request = (function ui$core$handle_request(letters,word){
var c__26616__auto___30811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26617__auto__ = (function (){var switch__26546__auto__ = (function (state_30783){
var state_val_30784 = (state_30783[(1)]);
if((state_val_30784 === (1))){
var inst_30778 = ["http://localhost:8888/scramble/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letters),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)].join('');
var inst_30779 = cljs_http.client.get(inst_30778);
var state_30783__$1 = state_30783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30783__$1,(2),inst_30779);
} else {
if((state_val_30784 === (2))){
var inst_30781 = (state_30783[(2)]);
var state_30783__$1 = state_30783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30783__$1,inst_30781);
} else {
return null;
}
}
});
return (function() {
var ui$core$handle_request_$_state_machine__26547__auto__ = null;
var ui$core$handle_request_$_state_machine__26547__auto____0 = (function (){
var statearr_30785 = [null,null,null,null,null,null,null];
(statearr_30785[(0)] = ui$core$handle_request_$_state_machine__26547__auto__);

(statearr_30785[(1)] = (1));

return statearr_30785;
});
var ui$core$handle_request_$_state_machine__26547__auto____1 = (function (state_30783){
while(true){
var ret_value__26548__auto__ = (function (){try{while(true){
var result__26549__auto__ = switch__26546__auto__(state_30783);
if(cljs.core.keyword_identical_QMARK_(result__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26549__auto__;
}
break;
}
}catch (e30786){var ex__26550__auto__ = e30786;
var statearr_30787_30812 = state_30783;
(statearr_30787_30812[(2)] = ex__26550__auto__);


if(cljs.core.seq((state_30783[(4)]))){
var statearr_30788_30813 = state_30783;
(statearr_30788_30813[(1)] = cljs.core.first((state_30783[(4)])));

} else {
throw ex__26550__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30814 = state_30783;
state_30783 = G__30814;
continue;
} else {
return ret_value__26548__auto__;
}
break;
}
});
ui$core$handle_request_$_state_machine__26547__auto__ = function(state_30783){
switch(arguments.length){
case 0:
return ui$core$handle_request_$_state_machine__26547__auto____0.call(this);
case 1:
return ui$core$handle_request_$_state_machine__26547__auto____1.call(this,state_30783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$handle_request_$_state_machine__26547__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$handle_request_$_state_machine__26547__auto____0;
ui$core$handle_request_$_state_machine__26547__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$handle_request_$_state_machine__26547__auto____1;
return ui$core$handle_request_$_state_machine__26547__auto__;
})()
})();
var state__26618__auto__ = (function (){var statearr_30789 = f__26617__auto__();
(statearr_30789[(6)] = c__26616__auto___30811);

return statearr_30789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26618__auto__);
}));


var c__26616__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26617__auto__ = (function (){var switch__26546__auto__ = (function (state_30802){
var state_val_30803 = (state_30802[(1)]);
if((state_val_30803 === (1))){
var inst_30790 = ["http://localhost:8888/scramble/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(letters),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word)].join('');
var inst_30791 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_30792 = cljs.core.PersistentHashMap.EMPTY;
var inst_30793 = [false,inst_30792];
var inst_30794 = cljs.core.PersistentHashMap.fromArrays(inst_30791,inst_30793);
var inst_30795 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_30790,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30794], 0));
var state_30802__$1 = state_30802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30802__$1,(2),inst_30795);
} else {
if((state_val_30803 === (2))){
var inst_30797 = (state_30802[(2)]);
var inst_30798 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_30797);
var inst_30799 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30798], 0));
var inst_30800 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_30797], 0));
var state_30802__$1 = (function (){var statearr_30804 = state_30802;
(statearr_30804[(7)] = inst_30799);

return statearr_30804;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30802__$1,inst_30800);
} else {
return null;
}
}
});
return (function() {
var ui$core$handle_request_$_state_machine__26547__auto__ = null;
var ui$core$handle_request_$_state_machine__26547__auto____0 = (function (){
var statearr_30805 = [null,null,null,null,null,null,null,null];
(statearr_30805[(0)] = ui$core$handle_request_$_state_machine__26547__auto__);

(statearr_30805[(1)] = (1));

return statearr_30805;
});
var ui$core$handle_request_$_state_machine__26547__auto____1 = (function (state_30802){
while(true){
var ret_value__26548__auto__ = (function (){try{while(true){
var result__26549__auto__ = switch__26546__auto__(state_30802);
if(cljs.core.keyword_identical_QMARK_(result__26549__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26549__auto__;
}
break;
}
}catch (e30806){var ex__26550__auto__ = e30806;
var statearr_30807_30815 = state_30802;
(statearr_30807_30815[(2)] = ex__26550__auto__);


if(cljs.core.seq((state_30802[(4)]))){
var statearr_30808_30816 = state_30802;
(statearr_30808_30816[(1)] = cljs.core.first((state_30802[(4)])));

} else {
throw ex__26550__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26548__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30817 = state_30802;
state_30802 = G__30817;
continue;
} else {
return ret_value__26548__auto__;
}
break;
}
});
ui$core$handle_request_$_state_machine__26547__auto__ = function(state_30802){
switch(arguments.length){
case 0:
return ui$core$handle_request_$_state_machine__26547__auto____0.call(this);
case 1:
return ui$core$handle_request_$_state_machine__26547__auto____1.call(this,state_30802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ui$core$handle_request_$_state_machine__26547__auto__.cljs$core$IFn$_invoke$arity$0 = ui$core$handle_request_$_state_machine__26547__auto____0;
ui$core$handle_request_$_state_machine__26547__auto__.cljs$core$IFn$_invoke$arity$1 = ui$core$handle_request_$_state_machine__26547__auto____1;
return ui$core$handle_request_$_state_machine__26547__auto__;
})()
})();
var state__26618__auto__ = (function (){var statearr_30809 = f__26617__auto__();
(statearr_30809[(6)] = c__26616__auto__);

return statearr_30809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26618__auto__);
}));

return c__26616__auto__;
});
ui.core.scramblies_form = (function ui$core$scramblies_form(){
var letters = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var word = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
e.preventDefault();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(letters))], 0));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(letters),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Add scrambled letters",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30810_SHARP_){
return cljs.core.reset_BANG_(letters,p1__30810_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(word),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Add word",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_(word,e.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Scramblie?",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return alert(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ui.core.handle_request(cljs.core.deref(letters),cljs.core.deref(word))));
})], null)], null)], null);
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
