// Discord Notification Utility

// Colors
const COLORS = {
    SUCCESS: 5763719, // Green
    WARNING: 16776960, // Yellow
    INFO: 3447003, // Blue
    ALERT: 15548997, // Red
};

type NotificationType =
    | 'TASK_COMPLETED'
    | 'NEW_TASK'
    | 'MATERIAL_REQUEST'
    | 'TASK_APPROVED'
    | 'TASK_OVERDUE';

interface NotificationData {
    type: NotificationType;
    user: { name: string };
    task?: { title: string; points?: number };
    request?: { item: string; details: string };
}

export async function sendDiscordNotification(data: NotificationData) {
    const webhookUrl = import.meta.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
        console.warn('DISCORD_WEBHOOK_URL is not defined in environment variables. Notification skipped.');
        return;
    }

    let embed: any = {
        color: COLORS.INFO,
        fields: [],
    };

    switch (data.type) {
        case 'TASK_COMPLETED': // Review
            embed = {
                title: `✅ ${data.user.name} terminó una tarea!`,
                description: `La tarea **"${data.task?.title}"** esta lista para ser aprobada. \nVe al dashboard de administrador para aprobarla.`,
                color: COLORS.SUCCESS,
            };
            break;

        case 'NEW_TASK':
            embed = {
                title: `🚀 Nueva misión asignada a ${data.user.name}!`,
                description: `Tienes una nueva tarea: **"${data.task?.title}"**.\nBuen trabajo, puedes hacerlo!`,
                color: COLORS.INFO,
            };
            break;

        case 'MATERIAL_REQUEST':
            embed = {
                title: `🛒 Nueva solicitud de material de ${data.user.name}`,
                description: `**Material necesario:** ${data.request?.item}\n**Detalles:** ${data.request?.details || 'Sin detalles proporcionados'}`,
                color: COLORS.WARNING,
            };
            break;

        case 'TASK_APPROVED':
            embed = {
                title: `🏆 Tarea aprobada! +${data.task?.points} puntos!`,
                description: `La tarea **"${data.task?.title}"** ha sido comprobada y se añadieron los puntos a ${data.user.name}.`,
                color: COLORS.SUCCESS,
            };
            break;

        case 'TASK_OVERDUE':
            embed = {
                title: `🚨 TASK OVERDUE - Action Required`,
                description: `The task **"${data.task?.title}"** assigned to ${data.user.name} has passed its due date.`,
                color: COLORS.ALERT,
            };
            break;
    }

    const payload = {
        username: "Santillan-bot",
        embeds: [embed],
    };

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const text = await response.text();
            console.error(`Failed to send Discord notification: ${response.status} ${response.statusText}`, text);
        }
    } catch (error) {
        console.error("Error sending Discord notification:", error);
    }
}
