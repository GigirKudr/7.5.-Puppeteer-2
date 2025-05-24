Feature: Online Cinema Reservation System
  As a user
  I want to easily book movie tickets online
  So that I can watch movies conveniently

Scenario: Positive booking of one seat
  Given I am on the reservation page
  When I select a showtime
  And I pick one free seat
  And I confirm my booking
  Then I should see a QR code

Scenario: Booking multiple seats at once
  Given I am on the reservation page
  When I select a showtime
  And I pick three free seats
  And I confirm my booking
  Then I should see a QR code

Scenario: Attempt to reserve an occupied seat
  Given I am on the reservation page
  When I select a showtime
  And I try to pick an occupied seat
  And I confirm my booking
  Then I shouldn't see a QR code