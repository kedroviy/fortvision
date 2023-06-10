import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { SetSearchValue } from 'src/app/core/store/actions/layout.actions';

@Component({
    selector: 'app-header-item',
    templateUrl: './header-item.component.html',
    styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent {
    @Input() profile: any;

    constructor(private router: Router, private store: Store,) { }

    search = new FormControl('');

    onLink(): void {
      this.router.navigate(['/feed']);
    }

    onSearch(): void {
        this.store.dispatch(new SetSearchValue(this.search.value ?? ''));
    }
}
