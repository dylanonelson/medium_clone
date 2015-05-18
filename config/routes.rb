Rails.application.routes.draw do

  root to: 'pages#root'

  resources :users, only: [:new, :create, :index, :show]
  resources :sessions, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do

    resources :tags, only: :index

    resource :feed, only: :show
    
    resource :follow, only: [:create, :destroy]

    resources :users, only: [:show] do
      resources :stories, only: :index
    end

    resources :comments, only: [:create]
    
    resources :stories, only: [:index, :show, :create, :update] do
      resources :tags, only: :index
      resources :comments, only: [:index]
    end

  end

end
