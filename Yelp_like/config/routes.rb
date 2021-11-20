Rails.application.routes.draw do
 

  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :restaurants, param: :slug
      resources :auth, only: %i[create] do
        collection do
          
          get 'me', to: 'auth#logged_in'
          delete 'logout', to: 'auth#logout'
        end
      end
 
      resources :registrations, only: %i[create]
    end
  end
  get '*path', to: 'pages#index', via: :all
end