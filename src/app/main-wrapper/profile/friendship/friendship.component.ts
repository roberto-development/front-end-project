import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-friendship',
  template: `
    <h2>Creating Modals with Twitter Bootstrap</h2>
    <!-- Button trigger modal -->
    <button class="btn btn-primary btn-lg" (click)="showDialog()">
      Launch Modal
    </button>
    <ng-container #vc></ng-container>
    <ng-template #modal_1>
      <!-- Modal -->
      <div
        class="modal fade"
        id="myModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
              <h4 class="modal-title" id="myModalLabel">This Modal title</h4>
            </div>
            <div class="modal-body">Add some text here</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                (click)="closeDialog()"
              >
                Close
              </button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal -->
      </div>
    </ng-template>
  `,
  // templateUrl: './friendship.component.html',
  styleUrls: ['./friendship.component.scss'],
})
export class FriendshipComponent implements OnInit {
  constructor() {}

  @ViewChild('modal_1') modal_1: TemplateRef<any>;
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;
  backdrop: any;

  showDialog() {
    let view = this.modal_1.createEmbeddedView(null);
    this.vc.insert(view);
    this.modal_1.elementRef.nativeElement.previousElementSibling.classList.remove(
      'fade'
    );
    this.modal_1.elementRef.nativeElement.previousElementSibling.classList.add(
      'modal-open'
    );
    this.modal_1.elementRef.nativeElement.previousElementSibling.style.display =
      'block';
    this.backdrop = document.createElement('DIV');
    this.backdrop.className = 'modal-backdrop';
    document.body.appendChild(this.backdrop);
  }

  ngOnInit(): void {}

  closeDialog() {
    this.vc.clear();
    document.body.removeChild(this.backdrop);
  }
}
