Rails.application.routes.draw do
  resources :users
  resources :memoirs
  resources :users do
  resources :memoirs do
    resources :memories
    resources :photos
  end
end

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