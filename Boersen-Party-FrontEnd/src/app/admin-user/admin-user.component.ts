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
}
