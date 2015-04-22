import Ember from 'ember';

export default Ember.Controller.extend({
  message: 'Notification message',
  type: 'success',
  autoClear: true,
  clearDuration: 2400,

  actions: {
    showNotifcation: function(message) {
      if(this.get('clearAll') === true) {
        this.notifications.clearAll();
      }
      this.notifications.addNotification({
        message: this.get('message'),
        type: this.get('type'),
        autoClear: this.get('autoClear'),
        clearDuration: this.get('clearDuration')
      });
    }
  }
});
