Rails.application.routes.draw do

  root to: 'pages#root'

  resources :users, only: [:new, :create, :index, :show]
  resources :sessions, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json }do
    resources :users, only: [:show]
    resources :comments, only: [:create]
    resources :stories, only: [:index, :show, :create, :update] do
      resources :comments, only: [:index]
    end
  end

end
