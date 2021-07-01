goog.provide('cljs_http.client');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__4221__auto__ = v;
if(cljs.core.truth_(and__4221__auto__)){
return (v > (0));
} else {
return and__4221__auto__;
}
})())){
return v;
} else {
return null;
}
});
cljs_http.client.acc_param = (function cljs_http$client$acc_param(o,v){
if(cljs.core.coll_QMARK_(o)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(o,v);
} else {
if((!((o == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,v], null);
} else {
return v;

}
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if((!(clojure.string.blank_QMARK_(s)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__27149_SHARP_,p2__27148_SHARP_){
var vec__27151 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__27148_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27151,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27151,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__27149_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),cljs_http.client.acc_param,no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if((!(clojure.string.blank_QMARK_(url)))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos(uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not(query_data.isEmpty()))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params(cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [no.en.core.url_encode(cljs.core.name(k)),"=",no.en.core.url_encode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27157_SHARP_){
return cljs_http.client.encode_val(k,p1__27157_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__27158){
var vec__27159 = p__27158;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27159,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27159,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27162_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27162_SHARP_)].join('');
}),esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__4221__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type","")));
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__5751__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5751__auto__)){
var params = temp__5751__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__27163 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0))),new cljs.core.Keyword(null,"headers","headers",-835030129),headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27163) : client.call(null,G__27163));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__27164_SHARP_){
return cljs_http.client.decode_body(p1__27164_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27289 = arguments.length;
var i__4830__auto___27290 = (0);
while(true){
if((i__4830__auto___27290 < len__4829__auto___27289)){
args__4835__auto__.push((arguments[i__4830__auto___27290]));

var G__27291 = (i__4830__auto___27290 + (1));
i__4830__auto___27290 = G__27291;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__27167){
var vec__27168 = p__27167;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27168,(0),null);
return (function (request){
var temp__5751__auto__ = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var default_headers__$1 = temp__5751__auto__;
var G__27171 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27171) : client.call(null,G__27171));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
}));

(cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq27165){
var G__27166 = cljs.core.first(seq27165);
var seq27165__$1 = cljs.core.next(seq27165);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27166,seq27165__$1);
}));

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27292 = arguments.length;
var i__4830__auto___27293 = (0);
while(true){
if((i__4830__auto___27293 < len__4829__auto___27292)){
args__4835__auto__.push((arguments[i__4830__auto___27293]));

var G__27294 = (i__4830__auto___27293 + (1));
i__4830__auto___27293 = G__27294;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__27174){
var vec__27175 = p__27174;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27175,(0),null);
return (function (request){
var temp__5751__auto__ = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var accept__$1 = temp__5751__auto__;
var G__27178 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27178) : client.call(null,G__27178));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
}));

(cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq27172){
var G__27173 = cljs.core.first(seq27172);
var seq27172__$1 = cljs.core.next(seq27172);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27173,seq27172__$1);
}));

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27295 = arguments.length;
var i__4830__auto___27296 = (0);
while(true){
if((i__4830__auto___27296 < len__4829__auto___27295)){
args__4835__auto__.push((arguments[i__4830__auto___27296]));

var G__27297 = (i__4830__auto___27296 + (1));
i__4830__auto___27296 = G__27297;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__27181){
var vec__27182 = p__27181;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27182,(0),null);
return (function (request){
var temp__5751__auto__ = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var content_type__$1 = temp__5751__auto__;
var G__27185 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27185) : client.call(null,G__27185));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
}));

(cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq27179){
var G__27180 = cljs.core.first(seq27179);
var seq27179__$1 = cljs.core.next(seq27179);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27180,seq27179__$1);
}));

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__5751__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5751__auto__)){
var params = temp__5751__auto__;
var map__27186 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__27186__$1 = cljs.core.__destructure_map(map__27186);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27186__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27186__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__27187 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode(params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27187) : client.call(null,G__27187));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__27190 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__27190__$1 = cljs.core.__destructure_map(map__27190);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27190__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27190__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = (function (p1__27188_SHARP_){
return cljs_http.util.transit_decode(p1__27188_SHARP_,decoding,decoding_opts);
});
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__27189_SHARP_){
return cljs_http.client.decode_body(p1__27189_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5751__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5751__auto__)){
var params = temp__5751__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__27191 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode(params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27191) : client.call(null,G__27191));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__27192_SHARP_){
return cljs_http.client.decode_body(p1__27192_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__27193){
var map__27194 = p__27193;
var map__27194__$1 = cljs.core.__destructure_map(map__27194);
var req = map__27194__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27194__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
var G__27195 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27195) : client.call(null,G__27195));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__27196){
var map__27197 = p__27196;
var map__27197__$1 = cljs.core.__destructure_map(map__27197);
var request = map__27197__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27197__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27197__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27197__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__4221__auto__ = form_params;
if(cljs.core.truth_(and__4221__auto__)){
var fexpr__27198 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null);
return (fexpr__27198.cljs$core$IFn$_invoke$arity$1 ? fexpr__27198.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__27198.call(null,request_method));
} else {
return and__4221__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__27199 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string(form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27199) : client.call(null,G__27199));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__27200_27299 = cljs.core.seq(params);
var chunk__27201_27300 = null;
var count__27202_27301 = (0);
var i__27203_27302 = (0);
while(true){
if((i__27203_27302 < count__27202_27301)){
var vec__27210_27303 = chunk__27201_27300.cljs$core$IIndexed$_nth$arity$2(null,i__27203_27302);
var k_27304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27210_27303,(0),null);
var v_27305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27210_27303,(1),null);
if(cljs.core.coll_QMARK_(v_27305)){
form_data.append(cljs.core.name(k_27304),cljs.core.first(v_27305),cljs.core.second(v_27305));
} else {
form_data.append(cljs.core.name(k_27304),v_27305);
}


var G__27306 = seq__27200_27299;
var G__27307 = chunk__27201_27300;
var G__27308 = count__27202_27301;
var G__27309 = (i__27203_27302 + (1));
seq__27200_27299 = G__27306;
chunk__27201_27300 = G__27307;
count__27202_27301 = G__27308;
i__27203_27302 = G__27309;
continue;
} else {
var temp__5753__auto___27310 = cljs.core.seq(seq__27200_27299);
if(temp__5753__auto___27310){
var seq__27200_27311__$1 = temp__5753__auto___27310;
if(cljs.core.chunked_seq_QMARK_(seq__27200_27311__$1)){
var c__4649__auto___27312 = cljs.core.chunk_first(seq__27200_27311__$1);
var G__27313 = cljs.core.chunk_rest(seq__27200_27311__$1);
var G__27314 = c__4649__auto___27312;
var G__27315 = cljs.core.count(c__4649__auto___27312);
var G__27316 = (0);
seq__27200_27299 = G__27313;
chunk__27201_27300 = G__27314;
count__27202_27301 = G__27315;
i__27203_27302 = G__27316;
continue;
} else {
var vec__27213_27317 = cljs.core.first(seq__27200_27311__$1);
var k_27318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27213_27317,(0),null);
var v_27319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27213_27317,(1),null);
if(cljs.core.coll_QMARK_(v_27319)){
form_data.append(cljs.core.name(k_27318),cljs.core.first(v_27319),cljs.core.second(v_27319));
} else {
form_data.append(cljs.core.name(k_27318),v_27319);
}


var G__27320 = cljs.core.next(seq__27200_27311__$1);
var G__27321 = null;
var G__27322 = (0);
var G__27323 = (0);
seq__27200_27299 = G__27320;
chunk__27201_27300 = G__27321;
count__27202_27301 = G__27322;
i__27203_27302 = G__27323;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__27216){
var map__27217 = p__27216;
var map__27217__$1 = cljs.core.__destructure_map(map__27217);
var request = map__27217__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27217__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27217__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__4221__auto__ = multipart_params;
if(cljs.core.truth_(and__4221__auto__)){
var fexpr__27218 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null);
return (fexpr__27218.cljs$core$IFn$_invoke$arity$1 ? fexpr__27218.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__27218.call(null,request_method));
} else {
return and__4221__auto__;
}
})())){
var G__27219 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27219) : client.call(null,G__27219));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__5751__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
var G__27220 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27220) : client.call(null,G__27220));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__27221_SHARP_){
var G__27222 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27221_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27222) : client.call(null,G__27222));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__27224){
var map__27225 = p__27224;
var map__27225__$1 = cljs.core.__destructure_map(map__27225);
var req = map__27225__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27225__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5751__auto__ = cljs_http.client.parse_url(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5751__auto__)){
var spec = temp__5751__auto__;
var G__27226 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,spec], 0)),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),(function (p1__27223_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__27223_SHARP_,query_params], 0));
}));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27226) : client.call(null,G__27226));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27324 = arguments.length;
var i__4830__auto___27325 = (0);
while(true){
if((i__4830__auto___27325 < len__4829__auto___27324)){
args__4835__auto__.push((arguments[i__4830__auto___27325]));

var G__27326 = (i__4830__auto___27325 + (1));
i__4830__auto___27325 = G__27326;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__27229){
var vec__27230 = p__27229;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27230,(0),null);
return (function (req){
var credentials__$1 = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return credentials;
}
})();
if((!(cljs.core.empty_QMARK_(credentials__$1)))){
var G__27233 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27233) : client.call(null,G__27233));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
}));

(cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq27227){
var G__27228 = cljs.core.first(seq27227);
var seq27227__$1 = cljs.core.next(seq27227);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27228,seq27227__$1);
}));

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5751__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5751__auto__)){
var oauth_token = temp__5751__auto__;
var G__27234 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__27234) : client.call(null,G__27234));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5751__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5751__auto__)){
var custom_channel = temp__5751__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27327 = arguments.length;
var i__4830__auto___27328 = (0);
while(true){
if((i__4830__auto___27328 < len__4829__auto___27327)){
args__4835__auto__.push((arguments[i__4830__auto___27328]));

var G__27329 = (i__4830__auto___27328 + (1));
i__4830__auto___27328 = G__27329;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__27237){
var vec__27238 = p__27237;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27238,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.delete$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.delete$.cljs$lang$applyTo = (function (seq27235){
var G__27236 = cljs.core.first(seq27235);
var seq27235__$1 = cljs.core.next(seq27235);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27236,seq27235__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27330 = arguments.length;
var i__4830__auto___27331 = (0);
while(true){
if((i__4830__auto___27331 < len__4829__auto___27330)){
args__4835__auto__.push((arguments[i__4830__auto___27331]));

var G__27332 = (i__4830__auto___27331 + (1));
i__4830__auto___27331 = G__27332;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__27243){
var vec__27244 = p__27243;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27244,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.get.cljs$lang$applyTo = (function (seq27241){
var G__27242 = cljs.core.first(seq27241);
var seq27241__$1 = cljs.core.next(seq27241);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27242,seq27241__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27333 = arguments.length;
var i__4830__auto___27334 = (0);
while(true){
if((i__4830__auto___27334 < len__4829__auto___27333)){
args__4835__auto__.push((arguments[i__4830__auto___27334]));

var G__27335 = (i__4830__auto___27334 + (1));
i__4830__auto___27334 = G__27335;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__27249){
var vec__27250 = p__27249;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27250,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.head.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.head.cljs$lang$applyTo = (function (seq27247){
var G__27248 = cljs.core.first(seq27247);
var seq27247__$1 = cljs.core.next(seq27247);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27248,seq27247__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27336 = arguments.length;
var i__4830__auto___27337 = (0);
while(true){
if((i__4830__auto___27337 < len__4829__auto___27336)){
args__4835__auto__.push((arguments[i__4830__auto___27337]));

var G__27338 = (i__4830__auto___27337 + (1));
i__4830__auto___27337 = G__27338;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__27255){
var vec__27256 = p__27255;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27256,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq27253){
var G__27254 = cljs.core.first(seq27253);
var seq27253__$1 = cljs.core.next(seq27253);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27254,seq27253__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27339 = arguments.length;
var i__4830__auto___27340 = (0);
while(true){
if((i__4830__auto___27340 < len__4829__auto___27339)){
args__4835__auto__.push((arguments[i__4830__auto___27340]));

var G__27341 = (i__4830__auto___27340 + (1));
i__4830__auto___27340 = G__27341;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__27261){
var vec__27262 = p__27261;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27262,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.move.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.move.cljs$lang$applyTo = (function (seq27259){
var G__27260 = cljs.core.first(seq27259);
var seq27259__$1 = cljs.core.next(seq27259);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27260,seq27259__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27342 = arguments.length;
var i__4830__auto___27343 = (0);
while(true){
if((i__4830__auto___27343 < len__4829__auto___27342)){
args__4835__auto__.push((arguments[i__4830__auto___27343]));

var G__27344 = (i__4830__auto___27343 + (1));
i__4830__auto___27343 = G__27344;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__27267){
var vec__27268 = p__27267;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27268,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.options.cljs$lang$applyTo = (function (seq27265){
var G__27266 = cljs.core.first(seq27265);
var seq27265__$1 = cljs.core.next(seq27265);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27266,seq27265__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27345 = arguments.length;
var i__4830__auto___27346 = (0);
while(true){
if((i__4830__auto___27346 < len__4829__auto___27345)){
args__4835__auto__.push((arguments[i__4830__auto___27346]));

var G__27347 = (i__4830__auto___27346 + (1));
i__4830__auto___27346 = G__27347;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__27273){
var vec__27274 = p__27273;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27274,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.patch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.patch.cljs$lang$applyTo = (function (seq27271){
var G__27272 = cljs.core.first(seq27271);
var seq27271__$1 = cljs.core.next(seq27271);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27272,seq27271__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27348 = arguments.length;
var i__4830__auto___27349 = (0);
while(true){
if((i__4830__auto___27349 < len__4829__auto___27348)){
args__4835__auto__.push((arguments[i__4830__auto___27349]));

var G__27350 = (i__4830__auto___27349 + (1));
i__4830__auto___27349 = G__27350;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__27279){
var vec__27280 = p__27279;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27280,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.post.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.post.cljs$lang$applyTo = (function (seq27277){
var G__27278 = cljs.core.first(seq27277);
var seq27277__$1 = cljs.core.next(seq27277);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27278,seq27277__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27351 = arguments.length;
var i__4830__auto___27352 = (0);
while(true){
if((i__4830__auto___27352 < len__4829__auto___27351)){
args__4835__auto__.push((arguments[i__4830__auto___27352]));

var G__27353 = (i__4830__auto___27352 + (1));
i__4830__auto___27352 = G__27353;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__27285){
var vec__27286 = p__27285;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27286,(0),null);
return cljs_http.client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(cljs_http.client.put.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs_http.client.put.cljs$lang$applyTo = (function (seq27283){
var G__27284 = cljs.core.first(seq27283);
var seq27283__$1 = cljs.core.next(seq27283);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27284,seq27283__$1);
}));


//# sourceMappingURL=cljs_http.client.js.map
