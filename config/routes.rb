Rails.application.routes.draw do

  root to: 'pages#root'

  resources :users, only: [:new, :create]
  resources :sessions, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do

    resource :session, only: [:create, :destroy]

    get 'profile', to: 'users#profile'

    resources :tags, only: :show

    resources :tags, only: [:index, :create] do
      resources :stories
    end

    resource :feed, only: :show
    
    resource :follow, only: [:create, :destroy]

    resources :users, only: [:show] do
      resources :stories, only: :index
    end

    resource :user, only: :update
    resources :users, only: :create

    resources :comments, only: [:create]

    resources :stories, only: [:index, :show, :create, :update, :destroy] do
      resources :comments, only: [:index]
    end

  end

end
