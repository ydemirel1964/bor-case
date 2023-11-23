## Installation 
Make sure you have environment setup properly.

1. Download the project (or clone using GIT)
2. Copy `.env.example` into `.env` and configure database credentials
3. Navigate to the project's root directory using terminal
4. Run `composer install`
5. Set the encryption key by executing `php artisan key:generate --ansi`
6. Run migrations `php artisan migrate`
7. Run seeders `php artisan db:seed`
8. Start local server by executing `php artisan serve`
9. Open new terminal and navigate to the `react` folder
10. Run `npm install`
11. Run `npm run dev` to start vite server for React
