puts "Hi there, what is your first name?"
firstName = gets.chomp
puts "Great! Now what is your middle name?"
middleName = gets.chomp
puts "Awesome! Now last one I promise! What is your last name?"
lastName = gets.chomp

fnLength = firstName.length
mnLength = middleName.length
lnLength = lastName.length

fullNameLength = (fnLength + mnLength + lnLength)

puts "Did you know that all of your names have " + fullNameLength.to_s + " characters in it?"
