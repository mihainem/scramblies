(ns ui.core
  (:require-macros [cljs.core.async.macros :refer [go]])
    (:require
     [reagent.core :as r :refer [atom]]
     [reagent.dom :as d]
     [cljs-http.client :as http]
     [cljs.core.async :refer [<!]]
     ))


;;{:with-credentials? false
   ;;:query-params {"since" 135}}
(defn handle-request
  [letters word]
  (go (let [response (<! (http/get (str "http://localhost:8888/scramble/" letters "/" word)))]
        response
        ;;(prn (map :login (:body response)))
        ))
  (go (let [response (<! (http/get (str "http://localhost:8888/scramble/" letters "/" word)
                                   {:with-credentials? false
                                    :query-params {}}))]
        (prn (:status response))
        (prn response))))


(defn scramblies-form []
  (let [letters (r/atom "")
        word (r/atom "")]
    (fn []
      [:form {:on-submit (fn [e] (.preventDefault e) (println (str @letters)))}
       [:input {:type "text"
                :value @letters
                :placeholder "Add scrambled letters"
                :on-change #(do (reset! letters (-> % .-target .-value)))}]
       [:br]
       [:input {:type "text"
                :value @word
                :placeholder "Add word"
                :on-change (fn [e] (reset! word (.-value (.-target e))))}]
       [:br]
       [:input {:type "button"
                :value "Scramblie?"
                :on-click (fn [] (js/alert (str (handle-request @letters @word))))
                ;;:on-change (fn [e] (reset! word (.-value (.-target e))))
                }]])))



;; -------------------------
;; Views

(defn home-page []
  [:div [:h2 "Is your word hidding in the scramblies ?"]
    [scramblies-form]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
