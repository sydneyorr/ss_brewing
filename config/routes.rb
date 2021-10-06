Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    post "/memes", to: "memes#create"
    post "/memes1", to: "memes#create1"
    get "/users", to: "users#index"
    get "/users/:id", to: "users#show"
    put "/users/:id", to: "users#update"

    resources :things
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
