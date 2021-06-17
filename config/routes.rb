Rails.application.routes.draw do
  root to: 'homepage#index'

  match '*path', to: 'homepage#index', via: :all # let react do the in page routing

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
