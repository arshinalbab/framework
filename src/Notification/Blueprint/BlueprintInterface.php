<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Notification\Blueprint;

use Flarum\Database\AbstractModel;
use Flarum\User\User;

/**
 * A notification BlueprintInterface, when instantiated, represents a notification about
 * something. The blueprint is used by the NotificationSyncer to commit the
 * notification to the database.
 */
interface BlueprintInterface
{
    /**
     * Get the user that sent the notification.
     *
     * @deprecated Will be removed for beta.14
     * @return User|null
     */
    public function getFromUser();

    /**
     * Get the model that is the subject of this activity.
     *
     * @deprecated Will be removed for beta.14
     * @return AbstractModel|null
     */
    public function getSubject();

    /**
     * Get the data to be stored in the notification.
     *
     * @deprecated Will be removed for beta.14
     * @return array|null
     */
    public function getData();

    /**
     * Get the attributes that uniquely identify a notification, plus metadata.
     * TODO: Uncomment this for beta.14.
     *
     * @return array
     */
    //public function getAttributes(): array;

    /**
     * Get the serialized type of this activity.
     *
     * @return string
     */
    public static function getType();

    /**
     * Get the name of the model class for the subject of this activity.
     *
     * @return string
     */
    public static function getSubjectModel();
}
