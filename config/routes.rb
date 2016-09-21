Rails.application.routes.draw do

  root 'pages#Reyes'
  get "/Instructions", to: "home#index"
  
  resources :faqs, :path => 'answers'

  devise_for :users

end
