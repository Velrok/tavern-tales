# typed: false
class HomepageController < ActionController::Base # needed so we can serve files here
  def index
    render :file => 'public/index.html'
  end
end
