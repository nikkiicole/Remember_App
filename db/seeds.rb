# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Memory.destroy_all
# Photo.destroy_all
# Memoir.destroy_all
# User.destroy_all

user1 = User.create!(email: "testemail1@yahoo.com", password: "password")
user2 = User.create!(email: "testemail2@yahoo.com", password: "password")
user3 = User.create!(email: "testemail3@yahoo.com", password: "password")
user4 = User.create!(email: "testemail4@yahoo.com", password: "password")
user5 = User.create!(email: "testemail5@yahoo.com", password: "password")
user6 = User.create!(email: "testemail6@yahoo.com", password: "password")
user7 = User.create!(email: "testemail7@yahoo.com", password: "password")
user8 = User.create!(email: "testemail8@yahoo.com", password: "password")
user9 = User.create!(email: "testemail9@yahoo.com", password: "password")
user10 = User.create!(email: "testemail10@yahoo.com", password: "password")

puts "#{User.count} users created"

memoir1 = Memoir.create!(name: "test1", sunrise: 1.years.ago,  sunset: 60.years.ago, thoughts: "Lorem Ipsum", shareble_id:"111111", user_id: "24")
memoir2 = Memoir.create!(name: "test2", sunrise: 2.years.ago,  sunset: 59.years.ago, thoughts: "Lorem Ipsum", shareble_id:"222222", user_id: "25")
memoir3 = Memoir.create!(name: "test3", sunrise: 3.years.ago,  sunset: 58.years.ago, thoughts: "Lorem Ipsum", shareble_id:"333333", user_id: "26")
memoir4 = Memoir.create!(name: "test4", sunrise: 4.years.ago,  sunset: 57.years.ago, thoughts: "Lorem Ipsum", shareble_id:"444444", user_id: "27")
memoir5 = Memoir.create!(name: "test5", sunrise: 5.years.ago,  sunset: 56.years.ago, thoughts: "Lorem Ipsum", shareble_id:"555555", user_id: "28")
memoir6 = Memoir.create!(name: "test6", sunrise: 6.years.ago,  sunset: 55.years.ago, thoughts: "Lorem Ipsum", shareble_id:"666666", user_id: "29")
memoir7 = Memoir.create!(name: "test7", sunrise: 7.years.ago,  sunset: 54.years.ago, thoughts: "Lorem Ipsum", shareble_id:"777777", user_id: "30")
memoir8 = Memoir.create!(name: "test8", sunrise: 8.years.ago,  sunset: 53.years.ago, thoughts: "Lorem Ipsum", shareble_id:"888888", user_id: "31")
memoir9 = Memoir.create!(name: "test9", sunrise: 9.years.ago,  sunset: 52.years.ago, thoughts: "Lorem Ipsum", shareble_id:"999999", user_id: "32")
memoir10 = Memoir.create!(name: "test10", sunrise: 10.years.ago, sunset: 51.years.ago, thoughts: "Lorem Ipsum", shareble_id:"101010", user_id: "33")
memoir11 = Memoir.create!(name: "test11", sunrise: 5.years.ago,  sunset: 56.years.ago, thoughts: "Lorem Ipsum", shareble_id:"110110", user_id: "24")
memoir12 = Memoir.create!(name: "test12", sunrise: 6.years.ago,  sunset: 55.years.ago, thoughts: "Lorem Ipsum", shareble_id:"120120", user_id: "25")
memoir13 = Memoir.create!(name: "test13", sunrise: 7.years.ago,  sunset: 54.years.ago, thoughts: "Lorem Ipsum", shareble_id:"130130", user_id: "26")
memoir14 = Memoir.create!(name: "test14", sunrise: 8.years.ago,  sunset: 53.years.ago, thoughts: "Lorem Ipsum", shareble_id:"140140", user_id: "27")
memoir15 = Memoir.create!(name: "test15", sunrise: 9.years.ago,  sunset: 52.years.ago, thoughts: "Lorem Ipsum", shareble_id:"150150", user_id: "28")

puts "#{Memoir.count} memoirs created"


memory1 = Memory.create!(content: "Lorem Ipsum ...", user_id: "24", memoir_id: "4")
memory2 = Memory.create!(content: "Lorem Ipsum ...", user_id: "25", memoir_id: "5")
memory3 = Memory.create!(content: "Lorem Ipsum ...", user_id: "26", memoir_id: "6")
memory4 = Memory.create!(content: "Lorem Ipsum ...", user_id: "27", memoir_id: "7")
memory5 = Memory.create!(content: "Lorem Ipsum ...", user_id: "28", memoir_id: "8")
memory6 = Memory.create!(content: "Lorem Ipsum ...", user_id: "29", memoir_id: "9")
memory7 = Memory.create!(content: "Lorem Ipsum ...", user_id: "30", memoir_id: "10")
memory8 = Memory.create!(content: "Lorem Ipsum ...", user_id: "31", memoir_id: "11")
memory9 = Memory.create!(content: "Lorem Ipsum ...", user_id: "32", memoir_id: "12")
memory10 = Memory.create!(content: "Lorem Ipsum ...", user_id: "33", memoir_id: "13")
memory11 = Memory.create!(content: "Lorem Ipsum ...", user_id: "24", memoir_id: "4")
memory12 = Memory.create!(content: "Lorem Ipsum ...", user_id: "25", memoir_id: "5")
memory13 = Memory.create!(content: "Lorem Ipsum ...", user_id: "26", memoir_id: "6")
memory14 = Memory.create!(content: "Lorem Ipsum ...", user_id: "27", memoir_id: "7")
memory15 = Memory.create!(content: "Lorem Ipsum ...", user_id: "28", memoir_id: "8")
memory16 = Memory.create!(content: "Lorem Ipsum ...", user_id: "29", memoir_id: "9")
memory17 = Memory.create!(content: "Lorem Ipsum ...", user_id: "30", memoir_id: "10")
memory18 = Memory.create!(content: "Lorem Ipsum ...", user_id: "31", memoir_id: "11")
memory19 = Memory.create!(content: "Lorem Ipsum ...", user_id: "32", memoir_id: "12")
memory20 = Memory.create!(content: "Lorem Ipsum ...", user_id: "33", memoir_id: "13")

puts "#{Memory.count} memories created"

photo1 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "24", memoir_id: "4")
photo2 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "25", memoir_id: "5")
photo3 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "26", memoir_id: "6")
photo4 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "27", memoir_id: "7")
photo5 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "28", memoir_id: "8")
photo6 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "29", memoir_id: "9")
photo7 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "30", memoir_id: "10")
photo8 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "31", memoir_id: "11")
photo9 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "32", memoir_id: "12")
photo10 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "33", memoir_id: "13")
photo11 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "24", memoir_id: "11")
photo12 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "25", memoir_id: "12")
photo13 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "26", memoir_id: "13")
photo14 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "27", memoir_id: "10")
photo15 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "28", memoir_id: "9")
photo16 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "29", memoir_id: "8")
photo17 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "30", memoir_id: "7")
photo18 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "31", memoir_id: "6")
photo19 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "32", memoir_id: "5")
photo20 = Photo.create!(img_url: "https://res.cloudinary.com/dbmxg3su8/image/upload/v1617072617/header_ztrmxv.jpg", caption: "Sarah working", user_id: "33", memoir_id: "4")

puts "#{Photo.count} photos created"