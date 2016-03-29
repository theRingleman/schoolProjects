def askRecursively question
  puts question
  reply = gets.chomp
  if reply == "yes"
    true
  elsif reply == "no"
    false
  else
    puts "Please answer 'yes' or 'no'."
    askRecursively question
  end
end

def factorial num
  if num < 0
    return "You can't take the factorial of a negative number."
  end
  if num <= 1
    1
  else
    num * factorial(num - 1)
  end
end

M = "land"
o = "water"

world =   [[o,o,o,o,o,o,o,o,o,o,o],
          [o,o,o,o,M,M,o,o,o,o,o],
          [o,o,o,o,o,o,o,o,M,M,o],
          [o,o,o,M,o,o,o,o,o,M,o],
          [o, o, o, M, o, M, M, o, o, o, o],
          [o, o, o, M, o, M, M, o, o, o, o],
          [o, o, o, M, M, M, M, M, M, M, o],
          [o, o, o, M, M, o, M, M, M, o, o],
          [o, o, o, o, o, o, M, M, o, o, o],
          [o, M, o, o, o, M, o, o, o, o, o],
          [o, o, o, o, o, o, o, o, o, o, o]]
