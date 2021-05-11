Rails.application.routes.draw do
  # This will allow routes to be nested with rails provided routes
  resources :memoirs do
    resources :memories
    resources :photos
  end

  get "/userprofile", to: "users#show"
  # get "/allusers", to: "users#index"
  get "/search/:name", to: "memoirs#search"

# devise provided routes
  devise_for :users, controllers: { registrations: 'registrations' }
    namespace :api do
      namespace :v1 do
        get 'post/index'
        post :auth, to: 'authentication#create'
        get  '/auth' => 'authentication#fetch'
    end

    namespace :v2 do
      # Things yet to come
    end
  end
end