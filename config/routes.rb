Rails.application.routes.draw do

  namespace :v1 do
    resources :games, except: :update
  end

  root to: 'homepage#index'
  match '*path', to: 'homepage#index', via: :all # let react do the in page routing

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
