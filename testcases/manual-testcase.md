## OrengeHRM Login Module Test Cases

## URL -- https://opensource-demo.orangehrmlive.com/

 # | TC ID |        

  LOGIN_TC_001 

 # | Test Description |

 Verify successful login with valid credentials 

 # | Steps |
 
 | 1. Open login page.
 2. Enter Username = Admin.
 3. Enter Password = admin123.
 4. Click Login. 
 
 # |  Expected Result |
  User is successfully authenticated and redirected to the Dashboard/Home page (OrangeHRM). 
 
 # | Priority |
  High 

## ------------------------------##

 # | TC ID |        

  LOGIN_TC_002

 # | Test Description |

 Verify login using Enter key
  

 # | Steps |
 
 1. Open login page.
 2. Enter valid username and password.3. Press Enter instead of clicking Login.
  
 
 # |  Expected Result |
  User is logged in successfully and redirected to Dashboard.
   
 
 # | Priority |
  Medium
  
  ## --------------------------------------------##

  # | TC ID |        

  LOGIN_TC_003

 # | Test Description |

 Verify error message for invalid password
   
 # | Steps |
 1. Open login page.
 2. Enter Username = Admin.
 3. Enter Password = WrongPass123.
 4. Click Login.
 
 # |  Expected Result |
 Login should fail and an "Invalid credentials" error message should be displayed.
 
 # | Priority |
  High
  
## ----------------------------------------------- ##

  # | TC ID |        

  LOGIN_TC_004

 # | Test Description |

 Verify error message for invalid username
 
 # | Steps |
 1. Open login page.
 2. Enter Username = InvalidUser.
 3. Enter Password = admin123.
 4. Click Login.
 
 # |  Expected Result |
  Login should fail and appropriate authentication error message should be displayed.
 
 # | Priority |
  High

  
  ## ---------------------------------------------- ##


  # | TC ID |        

  LOGIN_TC_005

 # | Test Description |

 Verify validation when Username and Password fields are empty
 
 # | Steps |

 1. Open login page.
 2. Leave Username and Password blank.
 3. Click Login.
  
 # |  Expected Result |

 Mandatory field validation messages should be displayed and login should not proceed.

 # | Priority |
     High


## ---------------------------- ##


# | TC ID |        

  LOGIN_TC_006

 # | Test Description |

 Verify amount value of 0
  
 # | Steps |

 1. Login.
 2. Create claim.
 3. Enter amount = 0.
 4. Submit.
 
 # |  Expected Result |
 
 System displays validation error because transaction amount must be greater than zero.
 
 # | Priority |
  High
  

## ------------------------------------- ##
  # | TC ID |        

  LOGIN_TC_007

 # | Test Description |

 Verify login with leading/trailing spaces in username
 
 # | Steps |

 1. Open login page.
 2. Enter Username = " Admin " (with spaces).
 3. Enter Password = admin123.
 4. Click Login.
 
 # |  Expected Result |
 
 System should either trim spaces and allow login or display a clear authentication error based on business rules.
 
 
 # | Priority |
  Medium


  ##    -----------------------------------------            ##

  # | TC ID |        

  LOGIN_TC_008

 # | Test Description |

 Verify maximum allowed claim amount
 
 
 # | Steps |

 1. Login.
 2. Create claim.
 3. Enter maximum allowed amount.
 4. Submit.

 
 # |  Expected Result |
 
 Claim is accepted if within configured limit; no truncation or calculation error occurs.
 
  
 # | Priority |
  Midium
  
  