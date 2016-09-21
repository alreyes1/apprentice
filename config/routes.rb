Rails.application.routes.draw do

  resources :faqs

  root 'pages#Reyes'
  get "/Instructions", to: "home#index"
  get "/answers", to: "faqs#index"
  
  devise_for :users

end
