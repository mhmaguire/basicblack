source 'https://rubygems.org'

gem 'rails', '3.2.13'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

group :development do 
	gem 'sqlite3' 
end


group :production do 
	gem 'mysql2'
end




# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'

gem 'haml'

gem 'html2haml'

gem 'haml-rails'

gem 'deface'
# To use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.0.0'

# To use Jbuilder templates for JSON
# gem 'jbuilder'

# Use unicorn as the app server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'debugger'
gem 'spree', '1.3.2'
gem 'spree_gateway', :github => 'spree/spree_gateway', :branch => '1-3-stable'
gem 'spree_auth_devise', :github => 'spree/spree_auth_devise', :branch => '1-3-stable'
gem 'spree_print_invoice' , :git => 'git://github.com/spree/spree_print_invoice.git'
gem 'spree_self_delivery', :git => 'git://github.com/secoint/spree_self_delivery.git'
gem 'spree_paypal_express', :git => 'git://github.com/spree/spree_paypal_express.git', branch: '1-3-stable'

gem 'datashift'
gem 'datashift_spree'

group :development do
  gem 'better_errors'
  gem 'meta_request'
  gem 'binding_of_caller'
end