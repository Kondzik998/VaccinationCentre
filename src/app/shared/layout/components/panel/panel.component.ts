import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelComponent implements OnInit, OnDestroy {
  @Input() public show = false;
  @Output() public changed = new EventEmitter<boolean>();

  public mobileView?: boolean;
  private watcher?: Subscription;

  constructor(
    private mediaObserver: MediaObserver,
    private changeDetector: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    const getAlias = (mediaChange: MediaChange[]) => {
      const index = 3;
      return mediaChange[index].mqAlias;
    };

    this.watcher = this.mediaObserver
      .asObservable()
      .pipe(
        distinctUntilChanged((x, y) => getAlias(x) === getAlias(y)),
        map((mediaChange) => getAlias(mediaChange) === 'gt-sm')
      )
      .subscribe((nonMobileView) => {
        this.changeNonMobileView(nonMobileView);
      });
  }

  public ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }

  public buttonClicked(): void {
    this.changeVisibility(!this.show);
  }

  private changeNonMobileView(state: boolean): void {
    this.mobileView = !state;
    this.changeVisibility(state);

    this.changeDetector.detectChanges();
  }

  private changeVisibility(state: boolean): void {
    if (this.show === state) return;

    this.show = state;
    this.changed.emit(state);
  }
}
