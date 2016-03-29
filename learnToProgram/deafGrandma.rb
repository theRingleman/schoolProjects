input = ""
quit = false

puts "Hey there sonny come talk to your grandma!".upcase
while !quit
  input = gets.chomp
  year = rand(30..51)
  if input == "BYEBYEBYE"
    quit = true
  elsif input == "BYE"
    puts ""
  elsif input == input.upcase
    puts "no, not sense 19#{year}!".upcase
  else
    puts "huh?! speak up, sonny!".upcase
  end
end
