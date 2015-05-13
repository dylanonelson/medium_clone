Rails.application.routes.draw do

  root to: 'users#show'

  resources :users, only: [:new, :create, :index, :show]
  resources :sessions, only: [:new, :create, :destroy]

end
