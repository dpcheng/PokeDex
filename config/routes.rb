Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :pokemon, except: [:edit, :new] do
      resources :items, only: [:show]
    end
  end
end
