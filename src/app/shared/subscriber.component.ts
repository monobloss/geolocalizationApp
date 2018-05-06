import { Subscription } from "rxjs/Subscription";
import {OnDestroy} from "@angular/core";

export abstract class SubscriberComponent implements OnDestroy {
  protected subscriptions: Array<Subscription> = [];

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
