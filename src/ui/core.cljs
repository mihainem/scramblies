(ns ui.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.string :as str]
   [reagent.core :as r :refer [atom]]
   [reagent.dom :as d]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]))


(defn scramble?
  [scramblies word]
  (if (and (> (count word) 0)
           (str/includes? scramblies (str (first word))))
    (recur (str/replace-first scramblies (first word) "")
           (str/replace-first word (str (first word)) ""))
    (= (count word) 0)))


(defn handle-request
  [letters word]
  (go (let [response (<! (http/get (str "http://localhost:8888/scramble/" letters "/" word)))]
        response))
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
                :on-click (do (fn [] (js/alert (str (scramble? @letters @word)))
                                (handle-request @letters @word)))}]
       [:p {:type "button"
            :value "Scramblie?"}]])))



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
