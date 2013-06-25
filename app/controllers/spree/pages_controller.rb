class Spree::PagesController < Spree::StoreController
  helper 'spree/base'
  helper 'static_pages'

  def self.define_actions(*names)
  	names.each do |name|
  		define_method name do 
  		end
  	end
  end

  define_actions :index, :about, :contact, :terms, :policies, :shipping, :sitemap, :search, :rental

end