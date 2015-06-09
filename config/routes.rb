Rails.application.routes.draw do

  root to: 'pages#root'

  get '/auth/:provider/callback', to: 'api/sessions#omniauth', defaults: { format: :json }

  namespace :api, defaults: { format: :json } do

    get 'search', to: 'trends#search'

    get 'trends/stories', to: 'trends#stories'

    get 'trends/authors', to: 'trends#authors'

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
