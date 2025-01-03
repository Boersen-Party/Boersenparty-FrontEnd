import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.css'
})
export class AdminUserComponent {
  activeView: string = 'users';

  // Example data for users
  users = [
    { name: 'Anne Schmidt', role: 'Admin' },
    { name: 'Brigitte Müller', role: 'Organizer' },
    { name: 'Hans Peter Wolfgang', role: 'Organizer' },
    { name: 'Max Mustermann', role: 'Admin' },
    { name: 'Helene Fischer', role: 'Guest' }
  ];

  // Example data for sessions
  sessions = [
    { sessionId: 23, hostId: 76, guestCount: 76 },
    { sessionId: 13, hostId: 65, guestCount: 2 },
    { sessionId: 11, hostId: 21, guestCount: 11 },
    { sessionId: 223, hostId: 90, guestCount: 17 },
    { sessionId: 177, hostId: 12, guestCount: 19 },
    { sessionId: 292, hostId: 22, guestCount: 21 }
  ];

  switchView(view: string): void {
    this.activeView = view;
  }

  getRoleClass(role: string): string {
    switch (role) {
      case 'Admin':
        return 'admin';
      case 'Organizer':
        return 'organizer';
      case 'Guest':
        return 'guest';
      default:
        return '';
    }
  }

  editPermissions(user: any): void {
    console.log(`Edit permissions for: ${user.name}`);
  }

  deleteUser(user: any): void {
    console.log(`Delete user: ${user.name}`);
  }

  viewSessionDetails(session: any): void {
    console.log(`Viewing details for session: ${session.sessionId}`);
    alert(`Details for session ID ${session.sessionId}: Host ${session.hostId}, Guests ${session.guestCount}`);
  }

  deleteSession(session: any): void {
    console.log(`Deleting session: ${session.sessionId}`);
    this.sessions = this.sessions.filter(s => s.sessionId !== session.sessionId);
  }
}
