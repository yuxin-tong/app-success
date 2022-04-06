import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AppConstants } from 'src/app/core/constants/app.constants';
import { MetadataService } from 'src/app/core/services/metadata.service';
import { AcceptDeclineDialogComponent } from 'src/app/modules/shared/components/accept-decline-dialog/accept-decline-dialog.component';

@Component({
  selector: 'app-user-area-page',
  templateUrl: './user-area-page.component.html',
  styleUrls: ['./user-area-page.component.scss'],
  animations: AppConstants.FADE_ANIMATION,
})
export class UserAreaPageComponent implements OnInit, OnDestroy {
  private routerSubs = Subscription.EMPTY;

  constructor(
    private router: Router,
    private metadataService: MetadataService,
    public dialog: MatDialog
  ) {
    this.routerSubs = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.metadataService.getTermsConditions().subscribe((res) => {
          const dialogRef = this.dialog.open(AcceptDeclineDialogComponent, {
            data: {
              header: 'Terms and Conditions',
              body: res.text,
              declineBtn: false,
            },
            panelClass: 'accept-reject-dialog-panel',
            disableClose: true,
          });

          dialogRef.afterClosed().subscribe((accept) => {});
        });
      });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    console.warn('--------------');
    this.routerSubs.unsubscribe();
  }
}
