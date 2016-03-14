puts "Hi there and welcome, please tell me your first name!"
firstName = gets.chomp
puts "Well we are off to a great start #{firstName}, let's continue by telling me your last name."
lastName = gets.chomp
puts "Great! Now I want to let you know that your first name is " + firstName.length.to_s + " characters long, and your last name is " + lastName.length.to_s + " long."
puts "Also, just so you know, your first name spelled backwards is #{firstName.reverse} and your last name spelled backwards is #{lastName.reverse}. And both of them together spelled backwards is " + (firstName + lastName).reverse + "."
puts "Now I am going to ask you for two numbers."
puts "Please enter your first number."
firstNum = gets.chomp
puts "Ok great now please enter your second number"
secondNum = gets.chomp
puts "Cool, now lets add them! Your first number plus your second number is equal to #{firstNum.to_i + secondNum.to_i}"
puts "Great now lets divide them! It equals #{firstNum.to_f / secondNum.to_f}"
puts "Ok now lets subtract them, getting crazy with our order here! This equals #{firstNum.to_i - secondNum.to_i}"
puts "Last but not least, we are going to see if there is a remainder if we divide them! Here we go #{firstNum.to_i % secondNum.to_i}"
