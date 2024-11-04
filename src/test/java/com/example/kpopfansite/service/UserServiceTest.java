// package com.example.kpopfansite.service;

// import com.example.kpopfansite.model.User;
// import com.example.kpopfansite.repository.UserRepository;
// import org.junit.jupiter.api.BeforeEach;
// import org.junit.jupiter.api.Test;
// import org.mockito.InjectMocks;
// import org.mockito.Mock;
// import org.mockito.MockitoAnnotations;
// import org.springframework.security.crypto.password.PasswordEncoder;

// import java.util.Optional;

// import static org.junit.jupiter.api.Assertions.*;
// import static org.mockito.Mockito.*;

// class UserServiceTest {

//     @Mock
//     private UserRepository userRepository;

//     @Mock
//     private PasswordEncoder passwordEncoder;

//     @InjectMocks
//     private UserService userService;

//     @BeforeEach
//     void setUp() {
//         MockitoAnnotations.openMocks(this);
//     }

//     @Test
//     void testCreateUser() {
//         User user = new User();
//         user.setUsername("testuser");
//         user.setPassword("password");

//         when(passwordEncoder.encode(anyString())).thenReturn("encodedPassword");
//         when(userRepository.save(any(User.class))).thenReturn(user);

//         User createdUser = userService.createUser(user);

//         assertNotNull(createdUser);
//         assertEquals("testuser", createdUser.getUsername());
//         assertEquals("encodedPassword", createdUser.getPassword());
//         verify(userRepository, times(1)).save(any(User.class));
//     }

//     @Test
//     void testGetUserById() {
//         User user = new User();
//         user.setId(1L);
//         user.setUsername("testuser");

//         when(userRepository.findById(1L)).thenReturn(Optional.of(user));

//         Optional<User> foundUser = userService.getUserById(1L);

//         assertTrue(foundUser.isPresent());
//         assertEquals("testuser", foundUser.get().getUsername());
//     }

//     @Test
//     void testUpdateUser() {
//         User existingUser = new User();
//         existingUser.setId(1L);
//         existingUser.setUsername("oldusername");

//         User updatedUser = new User();
//         updatedUser.setId(1L);
//         updatedUser.setUsername("newusername");

//         when(userRepository.findById(1L)).thenReturn(Optional.of(existingUser));
//         when(userRepository.save(any(User.class))).thenReturn(updatedUser);

//         User result = userService.updateUser(1L, updatedUser);

//         assertNotNull(result);
//         assertEquals("newusername", result.getUsername());
//         verify(userRepository, times(1)).save(any(User.class));
//     }

//     @Test
//     void testDeleteUser() {
//         doNothing().when(userRepository).deleteById(1L);

//         userService.deleteUser(1L);

//         verify(userRepository, times(1)).deleteById(1L);
//     }
// }
