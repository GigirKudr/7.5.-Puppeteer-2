Feature: Reservation System Tests
  As a user
  I want to book movie tickets successfully or handle errors gracefully
  So that my experience is smooth and reliable

Scenario: Positive Booking of One Seat
  Given I am on the reservation page
  When I select a seance time
  Then I choose one available standard chair
  Then I confirm my selection twice
  Then I see the QR code for confirmation

Scenario: Booking Multiple Seats At Once
  Given I am on the reservation page
  When I select a seance time
  Then I choose three available standard chairs
  Then I confirm my selection twice
  Then I see the QR code for confirmation

Scenario: Attempt To Reserve An Occupied Seat
  Given I am on the reservation page
  When I select a seance time
  Then I attempt to choose an already taken chair
  Then no QR code appears