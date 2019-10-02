DEVELOPMENT_IP: 54.86.241.66


Tutorial base:
https://medium.com/@bruno_boehm/reactjs-ruby-on-rails-api-heroku-app-2645c93f0814

- Comando usado para crear el proyecto de rails:
    ~/$ rails new chess960 --api  -d mysql --webpack=react -T
        -d == database
        -T == skip test files
        --api == sin vistas de rails
    
- Comando usado para crear el proyecto de react:
    ~/chess960 $ npx create-react-app react_chess960




Para hacer pruebas de React correr
 ~/chess960/react_chess960 $ npm start
y acceder a 
http://ec2-3-85-13-22.compute-1.amazonaws.com:3000/



Para instalar mysql se corrio:


### DESIGN

## DB
    
    users
        - username
        - secret
        - name
        - last name
        - date of birth
        - country
        
    permissions
        - permission_name
        
    matches
        - user_1
        - user_2
        - result
        - moves
        
    friend_requests
        - sender
        - receiver
        - status
        
    friends
        - user_1
        - user_2
        

## Rails (Active Record) Migrations
https://edgeguides.rubyonrails.org/active_record_migrations.html

## Active Record data types
https://guides.rubyonrails.org/v3.2/migrations.html#supported-types